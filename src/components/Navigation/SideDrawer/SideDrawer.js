import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
        <div className={classes.mobileOnly}>
        <BackDrop show={props.open} clicked={props.closed}></BackDrop>
        </div>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
        <Logo></Logo>
        </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </Aux>
    );
}

sideDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    closed: PropTypes.func
}
export default sideDrawer;