import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';
import { useLoading } from '../../../../contexts/loader/LoaderContext';

export default function ListFooter() {
    const { logout } = useAuth();
    const history = useHistory();
    const { setLoading } = useLoading();

    async function handleLogout() {
        setLoading(true);
        await logout();
        history.push('/web/login');
        setLoading(false);
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
