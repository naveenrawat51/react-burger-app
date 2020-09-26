import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as action from "../../store/actions/index";
import { connect } from "react-redux";
class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let displayOrders = <Spinner />;
    if (!this.props.loading) {
      displayOrders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingrediends}
          price={order.price}
        />
      ));
    }
    return <div>{displayOrders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (token, userId) => dispatch(action.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
