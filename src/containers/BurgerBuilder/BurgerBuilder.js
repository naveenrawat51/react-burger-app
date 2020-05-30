import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.7,
    cheese: 0.6,
    bacon: 0.4,
    meat: 0.9
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total: 4,
        purchasable: false,
        purchasing: false
    }

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
        alert('You Continue!!');
    }

    render() {
        const buttonDisabledInfo = {
            ...this.state.ingredients
        }
        for (let key in buttonDisabledInfo) {
            buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingrediends={this.state.ingredients}
                        modalClosed={this.purchaseCancelHandler}
                        continuePurchase={this.purchaseContinueHandler}
                        price={this.state.total}>
                    </OrderSummary>
                </Modal> 
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
    }
}

export default BurgerBuilder;