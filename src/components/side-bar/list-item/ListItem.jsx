import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

export default function ListItem(props) {
    const { name, icon, url } = props;
    return (
        <li className="nav-item">
            <a href={url} className="nav-link">
                <span className="link-text">{name}</span>
                <FontAwesomeIcon icon={icons[icon]} />
            </a>
        </li>
    );
}
ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    url: PropTypes.string,
    toggleTheme: PropTypes.func,
};
