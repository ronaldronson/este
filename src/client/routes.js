import App from './app/app.react';
import Home from './home/index.react';
import Login from './auth/index.react';
import Me from './me/index.react';
import NotFound from './components/notfound.react';
import React from 'react';
import Restaurant from './restaurants/restaurant.react';
import Restaurants from './restaurants/restaurants.react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Login} name="login" />
    <Route handler={Me} name="me" />
    <Route handler={Restaurants} name="restaurants" />
    <Route handler={Restaurant} name="restaurant" path="/restaurants/:id" />
  </Route>
);
