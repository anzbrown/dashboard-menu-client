import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';
import { getMenuConfiguration } from './helper';
import ListItem from './list-item/ListItem';
import './Sidebar.css';
import ListHeader from './list-header/ListHeader';

export default function Sidebar() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getMenuConfiguration(dispatch);
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <ListHeader icon={'faAngleDoubleRight'} />
                {state.menu.map(item => (
                    <ListItem
                        key={item.text}
                        name={item.text}
                        icon={item.iconHint}
                        url={item.url}
                    />
                ))}
            </ul>
        </nav>
    );
}
Sidebar.propTypes = {
    toggleTheme: PropTypes.func,
};
