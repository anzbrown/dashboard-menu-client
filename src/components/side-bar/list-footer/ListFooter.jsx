import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function ListFooter() {
    const logout = '/logout';
    return (
        <li className="nav-item">
            <a href={logout} className="nav-link">
                <span className="link-text">Logout</span>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
        </li>
    );
}
