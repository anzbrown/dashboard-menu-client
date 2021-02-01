import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getInitialTheme } from './helper';
import { AuthProvider } from './contexts/auth/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/authenticate/sign-up/SignUp';
import Login from './components/authenticate/login/Login';
import ForgotPassword from './components/authenticate/forgot-password/ForgotPassword';
import PrivateRoute from './components/private-route/PrivateRoute';
import './Themes.css';
import './App.css';
import { LoadingProvider } from './contexts/loader/LoaderContext';

export default function App() {
    useEffect(() => getInitialTheme(), []);

    return (
        <Router>
            <LoadingProvider>
                <AuthProvider>
                    <Switch>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route path="/web/signup" component={SignUp} />
                        <Route path="/web/login" component={Login} />
                        <Route
                            path="/web/forgot-password"
                            component={ForgotPassword}
                        />
                    </Switch>
                </AuthProvider>
            </LoadingProvider>
        </Router>
    );
}
