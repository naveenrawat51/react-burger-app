import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder  extends Component {
    state = {  }
    render() { 
        return (  
            <Aux>
                <div>Burger</div>
                <div>Build controls</div>
            </Aux>
        );
    }
}
 
export default BurgerBuilder;