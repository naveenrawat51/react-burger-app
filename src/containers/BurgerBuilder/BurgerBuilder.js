import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actionType from '../../store/actions/actions';
import { connect } from 'react-redux';


class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(response => this.setState({ ingredients: response.data }))
        //     .catch(error => this.setState({error: true}))
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
        let burger = this.state.error ? <p>Ingredients can't be loaded!! </p> : <Spinner />
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

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

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
        ing: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredientName) => dispatch({type: actionType.ADD_INGREDIENTS, ingredientName: ingredientName}),
        removeIngredient: (ingredientName) => dispatch({type: actionType.REMOVE_INGREDIENTS, ingredientName: ingredientName})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));