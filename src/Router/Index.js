import React from 'react';
import {Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home/Index';
import Contact from '../pages/Contact/Index';
import paths from "./paths"
import Layout from "../components/Layout/Index"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={paths.CONTACT} component={Contact} />
          <Route path={paths.ROOT} component={Home} />
          <Route component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default RouterComponent;
