import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/AuthContext';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/web/login" />
                );
            }}
        />
    );
}
PrivateRoute.propTypes = {
    component: PropTypes.func,
};
