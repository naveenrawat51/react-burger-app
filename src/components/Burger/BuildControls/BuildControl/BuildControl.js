import React from 'react';
import classes from './BuildControl.css';
import PropTypes from 'prop-types';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                onClick={props.removeIngrient}
                className={classes.Less}
                disabled={props.disabledBtn}>Less</button>
            <button
                onClick={props.addIngredient}
                className={classes.More}>More</button>
        </div>
    );
}

buildControl.propTypes = {
    label: PropTypes.string.isRequired,
    removeIngrient: PropTypes.func.isRequired,
    disabledBtn: PropTypes.bool.isRequired,
    addIngredient: PropTypes.func.isRequired
}

export default buildControl;