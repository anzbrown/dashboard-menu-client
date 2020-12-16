import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import './ListHeader.css';

export default function ListHeader(props) {
    const { icon } = props;
    return (
        <li className="nav-header">
            <a className="header-link">
                <span className="header-text">Dash</span>
                <FontAwesomeIcon icon={icons[icon]} />
            </a>
        </li>
    );
}
ListHeader.propTypes = {
    icon: PropTypes.string.isRequired,
};
