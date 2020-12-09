import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default function ListItem(props) {
    const { name, icon } = props;
    return (
        <li className="nav-item">
            <a href={name} className="nav-link">
                <span className="link-text">{name}</span>
                <FontAwesomeIcon icon={icons[icon]} />
            </a>
        </li>
    );
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
