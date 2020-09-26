import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import PropTypes from "prop-types";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle openSideDrawer={props.openSideDrawer}></DrawerToggle>
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
    </nav>
  </header>
);

toolbar.propTypes = {
  openSideDrawer: PropTypes.func.isRequired,
};

export default toolbar;
