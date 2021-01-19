import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function ListFooter() {
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        await logout();
        history.push('/login');
    }

    return (
        <li className="nav-item" onClick={handleLogout}>
            <span className="nav-link nav-header-item">
                <span className="link-text">Logout</span>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
        </li>
    );
}
