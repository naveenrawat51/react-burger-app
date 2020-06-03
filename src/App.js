import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Layout>
         <BurgerBuilder></BurgerBuilder>
         <Checkout></Checkout>
       </Layout>
      </div>
    );
  }

}

export default App;
