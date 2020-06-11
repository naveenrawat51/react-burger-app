import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.7,
    cheese: 0.6,
    bacon: 0.4,
    meat: 0.9
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        total: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => this.setState({ ingredients: response.data }))
            .catch(error => this.setState({error: true}))
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = type => {
        const oldIngredientCount = this.state.ingredients[type];
        const updateIngredientCount = oldIngredientCount + 1;
        const upgradeIngredient = {
            ...this.state.ingredients
        };
        upgradeIngredient[type] = updateIngredientCount;
        const ingredientsTotalNewPrice = INGREDIENT_PRICES[type] + this.state.total;
        this.setState({ total: ingredientsTotalNewPrice, ingredients: upgradeIngredient });
        this.updatePurchaseState(upgradeIngredient);
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] > 0) {
            const oldIngredientCount = this.state.ingredients[type];
            const updateIngredientCount = oldIngredientCount - 1;
            const upgradeIngredient = {
                ...this.state.ingredients
            };
            upgradeIngredient[type] = updateIngredientCount;
            const ingredientsTotalNewPrice = this.state.total - INGREDIENT_PRICES[type];
            this.setState({ total: ingredientsTotalNewPrice, ingredients: upgradeIngredient });
            this.updatePurchaseState(upgradeIngredient);
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.total.toFixed(2));
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const buttonDisabledInfo = {
            ...this.state.ingredients
        }
        for (let key in buttonDisabledInfo) {
            buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!! </p> : <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        buttondisabled={buttonDisabledInfo}
                        price={this.state.total}
                        purchasable={this.state.purchasable}
                        purchasing={this.purchaseHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingrediends={this.state.ingredients}
                modalClosed={this.purchaseCancelHandler}
                continuePurchase={this.purchaseContinueHandler}
                price={this.state.total} />
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

export default WithErrorHandler(BurgerBuilder, axios);