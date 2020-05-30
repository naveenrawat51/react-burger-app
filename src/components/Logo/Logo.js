import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img alt="My Logo" src={burgerLogo}/>
    </div>
);
 
export default logo;