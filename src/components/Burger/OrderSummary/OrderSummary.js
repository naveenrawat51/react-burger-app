import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {

    componentWillUpdate() {
console.log('[OrderSummary] updates');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingrediends)
            .map(igKey => <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingrediends[igKey]}
            </li>)
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType='Danger' clicked={this.props.modalClosed}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continuePurchase}>CONTINUE</Button>
            </Aux>
        )
    }

}

OrderSummary.propTypes = {
    price: PropTypes.number,
    modalClosed: PropTypes.func.isRequired,
    continuePurchase: PropTypes.func.isRequired
}

export default OrderSummary;