import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { getMenuConfiguration } from './helper';
import ListItem from './list-item/ListItem';
import ListHeader from './list-header/ListHeader';
import ListFooter from './list-footer/ListFooter';
import './Sidebar.css';

export default function Sidebar() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getMenuConfiguration(dispatch);
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <ListHeader />
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
