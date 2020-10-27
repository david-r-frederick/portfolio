import React from 'react';
import classes from './NavLink.module.css';

const NavLink = (props) => {
    const colorBlockClasses = [classes.navLinkColorBlock, classes[props.color]];
    return (
        <li>
            <a onClick={props.onClick} className={classes.navLinkanchor} href={props.href}>
                <div className={colorBlockClasses.join(' ')}></div>
                <span className={classes.navText}>{props.title}</span>
            </a>
        </li>
    );
};

export default NavLink;
