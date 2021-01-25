import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { toggleTheme } from '../../../../helper';
import './ListHeader.css';
import { useAuth } from '../../../../contexts/AuthContext';

export default function ListHeader() {
    const { currentUser } = useAuth();
    return (
        <li className="nav-header" onClick={toggleTheme}>
            <span className="header-link nav-header-item">
                <span className="header-text">{currentUser.email}</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
        </li>
    );
}
