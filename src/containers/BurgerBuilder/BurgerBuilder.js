import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";
import { connect } from "react-redux";

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    props.onInitIngredients();
  }, []);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/login");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push("/checkout");
  };

  const buttonDisabledInfo = {
    ...props.ing,
  };
  for (let key in buttonDisabledInfo) {
    buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = props.error ? (
    <h1 style={{ textAlign: "center" }}>Ingredients can't be loaded!! </h1>
  ) : (
    <Spinner />
  );
  if (props.ing) {
    burger = (
      <Aux>
        <Burger ingredients={props.ing} />
        <BuildControls
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          buttondisabled={buttonDisabledInfo}
          price={props.totalPrice}
          purchasable={updatePurchaseState(props.ing)}
          isAuth={props.isAuthenticated}
          purchasing={purchaseHandler}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingrediends={props.ing}
        modalClosed={purchaseCancelHandler}
        continuePurchase={purchaseContinueHandler}
        price={props.totalPrice}
      />
    );
  }

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    ing: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token ? true : false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredientName) =>
      dispatch(actions.addIngredient(ingredientName)),
    removeIngredient: (ingredientName) =>
      dispatch(actions.removeIngredient(ingredientName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
