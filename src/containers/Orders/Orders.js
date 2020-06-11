import React, { Component } from 'react';
import classes from './Orders.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ orders: fetchedOrders, loading: false })
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                <p>length: {this.state.orders.length}</p>
                {this.state.orders.map(order => (<Order
                    key={order.id}
                    ingredients={order.ingrediends}
                    price={order.price} />))}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, axios);