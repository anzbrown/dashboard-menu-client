import React from 'react';

export default props => {
    const classes = props.type==='logo' ? 'link-text logo-text' : 'link-text';

    return (
        <li className={props.type}>
            <a href="#" className="nav-link">
                <span className={classes}>{props.name}</span>
            </a>
        </li>
    );
};