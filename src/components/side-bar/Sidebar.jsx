import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';
import { getMenuConfiguration } from './helper';
import ListItem from './list-item/ListItem';
import './Sidebar.css';
import ListHeader from './list-header/ListHeader';
import ListFooter from './list-footer/ListFooter';

export default function Sidebar(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { toggleTheme } = props;

    useEffect(() => {
        getMenuConfiguration(dispatch);
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <ListHeader toggleTheme={toggleTheme} />
                {state.menu.map(item => (
                    <ListItem
                        key={item.text}
                        name={item.text}
                        icon={item.iconHint}
                        url={item.url}
                    />
                ))}
                <ListFooter />
            </ul>
        </nav>
    );
}
Sidebar.propTypes = {
    toggleTheme: PropTypes.func,
};
