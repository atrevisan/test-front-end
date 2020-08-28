import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import UserPicture from "../../../components/UserPicture/UserPicture";

const Toolbar = (props) => {
  return (
    <header>
      <div className={classes.TopSection}>
        <div className={classes.LogoContainer}>
            Logo
        </div>
        <div className={classes.UserContainer}>
          <UserPicture />
        </div>
      </div>

      <NavigationItems>
        <NavigationItem exact to="/">
          Home
        </NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
      </NavigationItems>
    </header>
  );
};

export default Toolbar;
