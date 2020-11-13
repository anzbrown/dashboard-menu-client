import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const ListItem = props => {
    const { name, type, icon } = props;
    const spanClasses = type === 'logo' ? 'link-text logo-text' : 'link-text';

    return (
        <li className={type}>
            <a href={name} className="nav-link">
                <span className={spanClasses}>{name}</span>
                <FontAwesomeIcon icon={icons[icon]} />
            </a>
        </li>
    );
}

export default ListItem;