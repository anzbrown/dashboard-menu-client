import React from 'react';
import ListItem from './list-item/index';

import './style.css';

export default () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <ListItem name="Dashboard" type="logo"/>
                <ListItem name="Adam" type="nav-item"/>
                <ListItem name="Heather" type="nav-item"/>
                <ListItem name="Leia" type="nav-item"/>
                <ListItem name="Jessie" type="nav-item"/>
                <ListItem name="Logout" type="nav-item"/>
            </ul>
        </nav>
    );
};