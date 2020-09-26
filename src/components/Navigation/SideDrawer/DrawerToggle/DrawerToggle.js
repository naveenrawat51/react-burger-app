import React from "react";
import classes from "./DrawerToggle.css";
import PropTypes from "prop-types";

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.openSideDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

drawerToggle.propTypes = {
  openSideDrawer: PropTypes.func.isRequired,
};

export default drawerToggle;
