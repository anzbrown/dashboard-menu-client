import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faMoon,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import { getTheme, toggleTheme } from '../../../../themes/helper';
import './ListHeader.css';

export default function ListHeader() {
    const [theme, setTheme] = useState(getTheme());

    async function handleThemeChange() {
        return setTheme(toggleTheme());
    }

    return (
        <li className="nav-header" onClick={handleThemeChange}>
            <span className="header-link nav-header-item">
                <span className="header-text">
                    <FontAwesomeIcon
                        icon={theme === 'dark-theme' ? faSun : faMoon}
                    />
                </span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
        </li>
    );
}
