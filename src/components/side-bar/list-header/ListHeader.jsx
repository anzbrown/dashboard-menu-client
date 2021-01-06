import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './ListHeader.css';

export default function ListHeader(props) {
    const { toggleTheme } = props;
    return (
        <li className="nav-header" onClick={toggleTheme}>
            <span className="header-link nav-header-item">
                <span className="header-text">Dash</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
        </li>
    );
}
ListHeader.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};
