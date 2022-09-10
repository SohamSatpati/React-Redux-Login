import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import About from '../component/about/about';
import Home from '../component/home/home';

import Header from '../layout/header/navbar';
import ProductCategory from '../Product/ProductCategory/ProductCategory';
import ProductCategoryNew from '../Product/ProductCategory/ProductCategoryNew';
import ProductSubCategory from '../Product/ProductSubCategory/ProductSubCategory';
import ProductSubCategoryNew from '../Product/ProductSubCategory/ProductSubCategoryNew';
import ProductDetails from '../Product/ProductDetails/ProductDetails';
import ProductDetailsNew from '../Product/ProductDetails/ProductDetailsNew';
import Registration from '../component/Auth/Registration/Registration';
//import Login from '../component/Auth/Login/Login';
import LoginFunc from '../component/Auth/Login/LoginFunc';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../component/Auth/Logout/Logout';
import ProductCategoryRedux from '../Product/ProductCategory/ProductCategory(Redux)';
import ProductDetailsRedux from '../Product/ProductDetails/ProductDetailsRedux';
const Contact = lazy(() => import('../component/contact/contact'));

export default function Routes() {
  //https://localhost:3000/--default url
  return (
    <Router>
      <Header />
      <Switch>
        {/* '/' is default for every other component(like /aout,/contact etc) if we want a specific page only for '/' then we should add a property named exact */}
        <Route exact path='/' component={Home}></Route>
        <Route path='/about/:myName' component={About}></Route>
        //this are for product category demo
        {/* <Route path="/ProductCategory" component={ProductCategory}></Route> */}
        <Route
          path='/ProductSubCategory/:pName'
          component={ProductSubCategory}
        ></Route>
        <Route
          path='/ProductDetails/:pName/:pDetails'
          component={ProductDetails}
        ></Route>
        //this are for product category new
        <ProtectedRoute
          path='/ProductCategory'
          component={ProductCategory}
        ></ProtectedRoute>
        <Route
          path='/ProductCategoryNew'
          component={ProductCategoryNew}
        ></Route>
        <Route
          path='/ProductSubCategoryNew/:pName'
          component={ProductSubCategoryNew}
        ></Route>
        <Route
          path='/ProductDetailsNew/:pName/'
          component={ProductDetailsNew}
        ></Route>
        <Route
          path='/productCategoryRedux'
          component={ProductCategoryRedux}
        ></Route>
        <Route
          path='/productDetailsRedux/:pId'
          component={ProductDetailsRedux}
        ></Route>
        <Route
          path='/contact'
          render={() => (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Contact />
            </Suspense>
          )}
        />
        <Route path='/registration' component={Registration}></Route>
        <Route path='/login' component={LoginFunc}></Route>
        <Route path='/logout' component={Logout}></Route>
        {/* This should be the last component otherwise it will show the same message even of there is an actual component */}
        <Route render={() => <h1>Page Not Found!</h1>}></Route>
      </Switch>
    </Router>
  );
}
