import React from "react";
import classes from "./UserOptions.module.css";

import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";

const UserOptions = (props) => {
  return (
    <div className={classes.UserOptionsContainer}>
      <NavigationItems userOptions>
        <NavigationItem  to="/profile">
          Profile
        </NavigationItem>
        <NavigationItem to="/logout">Logout</NavigationItem>
      </NavigationItems>
    </div>
  );
};

export default UserOptions;
