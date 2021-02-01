import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';
import './LoadingOverlay.css';

const LoaderContext = React.createContext();

export function useLoading() {
    return useContext(LoaderContext);
}

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const exports = {
        setLoading,
        loading,
    };

    return (
        <LoaderContext.Provider value={exports}>
            <LoadingOverlay active={loading} spinner={<BounceLoader />}>
                {children}
            </LoadingOverlay>
        </LoaderContext.Provider>
    );
}
LoadingProvider.propTypes = {
    children: PropTypes.element,
};
