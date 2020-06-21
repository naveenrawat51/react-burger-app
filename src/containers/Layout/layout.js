import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { connect } from 'react-redux';

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
            <Toolbar
            isAuth={this.props.isAuthenticated}
            openSideDrawer={this.sideDrawerToggleHandler}></Toolbar>
            <SideDrawer
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token ? true : false
    }
}
export   default connect(mapStateToProps)(layout);