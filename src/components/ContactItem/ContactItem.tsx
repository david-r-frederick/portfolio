import React from 'react';
import classes from './ContactItem.module.css';
import { IconType } from 'react-icons/lib';

interface IContactItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tooltip?: string;
    linkText: string;
    icon?: IconType;
}

const ContactItem = (props: IContactItemProps) => {
    const { icon, linkText, tooltip, ...remaining } = props;

    return (
        <div className="my-4 d-flex align-items-center">
            <a
                // @ts-ignore
                dataTooltip={tooltip}
                {...remaining}
                className={`text-black position-relative rounded-circle ${classes.iconWrapper}`}>
                {props.icon && <props.icon className={classes.icon} />}
                <span className="ml-4">{props.linkText}</span>
            </a>
        </div>
    );
};

export default ContactItem;