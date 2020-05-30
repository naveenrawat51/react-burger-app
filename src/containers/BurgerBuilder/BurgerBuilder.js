import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad: 0.7,
    cheese: 0.6,
    bacon: 0.4,
    meat: 0.9
}

class BurgerBuilder  extends Component {

    state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
      },
      total: 4
    }

    addIngredientHandler = type => {
        const oldIngredientCount = this.state.ingredients[type];
        const updateIngredientCount = oldIngredientCount + 1;
        const upgradeIngredient = {
            ...this.state.ingredients
        };
        upgradeIngredient[type] = updateIngredientCount;
        const ingredientsTotalNewPrice = INGREDIENT_PRICES[type] + this.state.total;
        this.setState({total: ingredientsTotalNewPrice, ingredients: upgradeIngredient});
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type] > 0) {
            const oldIngredientCount = this.state.ingredients[type];
            const updateIngredientCount = oldIngredientCount - 1;
            const upgradeIngredient = {
                ...this.state.ingredients
            };
            upgradeIngredient[type] = updateIngredientCount;
            const ingredientsTotalNewPrice = this.state.total - INGREDIENT_PRICES[type];
            this.setState({total: ingredientsTotalNewPrice, ingredients: upgradeIngredient});
        }
    }
    render() {
        const buttonDisabledInfo = {
            ...this.state.ingredients
        }
        for(let key in buttonDisabledInfo){
            buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0;
        }
        return (  
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                buttondisabled={buttonDisabledInfo}
                price={this.state.total}/>
            </Aux>
        );
    }
}
 
export default BurgerBuilder;