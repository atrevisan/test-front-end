import React from "react";
import Layout from "../hoc/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../containers/Home/Home";
import About from '../containers/About/About';

const Routes = (props) => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
