import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingrediends)
        .map(igKey => <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingrediends[igKey]}
        </li>)
    return (<Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType='Danger' clicked={props.modalClosed}>CANCEL</Button>
        <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
    </Aux>);
}

orderSummary.propTypes = {
    price: PropTypes.number,
    modalClosed: PropTypes.func.isRequired,
    continuePurchase: PropTypes.func.isRequired
}

export default orderSummary;