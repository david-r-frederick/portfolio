import React from "react";
import classes from "./NavLink.module.css";

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    color: string;
    title: string;
}

const NavLink = (props: INavLinkProps): JSX.Element => {
    const { color,title, ...remaining } = props;

    const colorBlockClasses = [classes.navLinkColorBlock, classes[color]];

    return (
        <a {...remaining} className={classes.navLinkanchor}>
            <div className={colorBlockClasses.join(" ")}></div>
            <span className={classes.navText}>{title}</span>
        </a>
    );
};

export default NavLink;
