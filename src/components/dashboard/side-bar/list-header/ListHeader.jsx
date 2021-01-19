import React from 'react';
import { toggleTheme } from '../../../../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './ListHeader.css';

export default function ListHeader() {
    return (
        <li className="nav-header" onClick={toggleTheme}>
            <span className="header-link nav-header-item">
                <span className="header-text">Dash</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
        </li>
    );
}