import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {

    const {children, ...rest} = props;
    return (
        <li className={classes.NavigationItem}>
            <NavLink activeClassName={classes.Active} {...rest}>{children}</NavLink>
        </li>
    )
}

export default navigationItem;