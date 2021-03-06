import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.6,
  bacon: 0.4,
  meat: 0.9,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updatedIngredients = updateObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENTS:
      const updatedIng = {
        [action.ingredientName]:
          state.ingredients[action.ingredientName] > 0
            ? state.ingredients[action.ingredientName] - 1
            : state.ingredients[action.ingredientName],
      };
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updatedSt);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: initialState.totalPrice,
        error: false,
        building: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
