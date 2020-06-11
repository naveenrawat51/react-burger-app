import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
     }

     orderHandler = (event) => {
         event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingrediends: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Naveen Rawat',
                address: {
                    street: 'new Street',
                    zipCode: '121004',
                    country: 'India'
                },
                email: 'naveenrawat51@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }))
      }
    render() {
        let form = (
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder='your Name'/>
                    <input className={classes.Input} type='text' name='email' placeholder='your Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='your Street'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='your Postal Code'/>
                    <Button
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter you contact Data!!</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;