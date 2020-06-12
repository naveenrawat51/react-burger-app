import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';
import Proptypes from 'prop-types';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
            })
        });
    if(Object.keys(props.ingredients).length > 0) {
        if (Object.values(props.ingredients).reduce((a, b) => a + b) === 0) {
            transformIngredients = <p>Please start adding ingredient!!</p>
        }
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}

burger.propTypes = {
    ingredients: Proptypes.object.isRequired,
}

export default burger;