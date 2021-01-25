import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';
import * as helpers from './helper';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    const exports = {
        ...helpers,
        currentUser,
    };

    return (
        <AuthContext.Provider value={exports}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.element,
};
