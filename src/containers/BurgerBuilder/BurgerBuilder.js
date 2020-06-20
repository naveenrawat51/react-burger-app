import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { connect } from 'react-redux';


class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.onInitIngredients();
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const buttonDisabledInfo = {
            ...this.props.ing
        }
        for (let key in buttonDisabledInfo) {
            buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error ? <h1 style={{textAlign: 'center'}}>Ingredients can't be loaded!! </h1> : <Spinner />;
        if (this.props.ing) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ing} />
                    <BuildControls
                        addIngredient={this.props.addIngredient}
                        removeIngredient={this.props.removeIngredient}
                        buttondisabled={buttonDisabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.updatePurchaseState(this.props.ing)}
                        purchasing={this.purchaseHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingrediends={this.props.ing}
                modalClosed={this.purchaseCancelHandler}
                continuePurchase={this.purchaseContinueHandler}
                price={this.props.totalPrice} />
        }

        // if (this.state.loading) {
        //     orderSummary = <Spinner />;
        // }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ing: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        removeIngredient: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));