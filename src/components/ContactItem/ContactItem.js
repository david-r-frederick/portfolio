import React from 'react';
import classes from './ContactItem.module.css';

const ContactItem = (props) => {
    return (
        <div className={`container my-4 ${classes.contactRow}`}>
            <a onClick={props.onClick} dataToolTip={props.tooltip} className={classes.iconWrapper} href={props.href} target={props.target}>
                <props.icon className={classes.icon} />
            </a>
            <a onClick={props.onClick} className="ml-4" href={props.href}>
                {props.linkText}
            </a>
        </div>
    );
};

export default ContactItem;