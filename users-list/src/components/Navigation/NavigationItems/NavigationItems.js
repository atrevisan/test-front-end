import React from "react";
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {

  const navClasses = [classes.NavigationItems];

  if(props.userOptions)
    navClasses.push(classes.UserOptions);

  return (
    <nav className={navClasses.join(' ')}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default navigationItems;
