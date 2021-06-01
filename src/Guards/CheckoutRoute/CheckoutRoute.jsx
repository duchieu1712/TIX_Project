import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import {connect} from 'react-redux';

const CheckoutRoute = (props) => {
//   const { currentUser } = useSelector((state) => state.userReducer);
  const { component: Component, currentUser, ...routerProps } = props;

  return (
    <Route
      {...routerProps}
      render={(props) => {
        if (currentUser) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps,null)(CheckoutRoute);
