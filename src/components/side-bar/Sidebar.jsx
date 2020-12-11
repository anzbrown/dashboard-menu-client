import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';
import { getMenuConfiguration } from './helper';
import ListItem from './list-item/ListItem';
import './Sidebar.scss';

export default function Sidebar(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { toggleTheme } = props;

    useEffect(() => {
        getMenuConfiguration(dispatch);
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {state.menu.map(item => (
                    <ListItem
                        toggleTheme={toggleTheme}
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
