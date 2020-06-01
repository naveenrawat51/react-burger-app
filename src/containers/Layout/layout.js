import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component {

    state = {
        showSideDrawer: true  
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer}
        }); 
    }

    render() {
        return (
            <Aux>
            <Toolbar openSideDrawer={this.sideDrawerToggleHandler}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default layout;