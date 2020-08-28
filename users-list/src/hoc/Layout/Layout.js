import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Tollbar";
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={classes.ContentContainer}>{props.children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
