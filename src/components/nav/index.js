import React from 'react';
import ListItem from './list-item/index';
import './style.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <ListItem name="Dash" type="logo" icon="faAngleDoubleRight"/>
                <ListItem name="Adam" type="nav-item" icon="faGamepad"/>
                <ListItem name="Heather" type="nav-item" icon="faMountain"/>
                <ListItem name="Leia" type="nav-item" icon="faCat"/>
                <ListItem name="Jessie" type="nav-item" icon="faDog"/>
                <ListItem name="Logout" type="nav-item" icon="faSignOutAlt"/>
            </ul>
        </nav>
    );
}

export default Nav;