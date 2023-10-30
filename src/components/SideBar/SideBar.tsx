import React, { useCallback } from "react";
import classes from "./SideBar.module.css";
// @ts-ignore
import resumePdf from "../../assets/ResumeDavidFrederick.pdf";
import NavLink from "../NavLink/NavLink";

const SideBar = (props: {
    toggled?: boolean;
    refs: {
        aboutRef: React.LegacyRef<HTMLDivElement> | null;
        contactRef: React.LegacyRef<HTMLDivElement> | null;
        educationRef: React.LegacyRef<HTMLDivElement> | null;
        experienceRef: React.LegacyRef<HTMLDivElement> | null;
        projectsRef: React.LegacyRef<HTMLDivElement> | null;
        skillsRef: React.LegacyRef<HTMLDivElement> | null;
    };
    closeSidebar: () => void;
}) => {

    const { aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef } = props.refs;

    const scrollToHeader = useCallback((ref: React.LegacyRef<HTMLDivElement>) => {
        if (ref) {
            // @ts-ignore
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleNavLinkClick = useCallback((refObj: React.LegacyRef<HTMLDivElement>) => {
        scrollToHeader(refObj);
        props.closeSidebar();
    }, [ scrollToHeader, props ]);

    return (
        <div className={`${classes.navContainer} ${props.toggled ? classes.toggled : classes.unToggled}`}>
            <div className={classes.meBox}>
                <h2 className={classes.name}>
                    David
                    <br />
                    Frederick
                </h2>
                <p className={classes.jobTitle}>Front-End Developer</p>
            </div>
            <ul className={classes.navLinksContainer}>
                <li>
                    <NavLink onClick={() => handleNavLinkClick(aboutRef)}
                        color="blue"
                        title="About" />
                </li>
                <li>
                    <NavLink
                        onClick={() => handleNavLinkClick(experienceRef)}
                        color="yellow"
                        title="Experience"
                    />
                </li>
                <li>
                    <NavLink
                        onClick={() => handleNavLinkClick(projectsRef)}
                        color="red"
                        title="Projects"
                    />
                </li>
                <li>
                    <NavLink
                        onClick={() => handleNavLinkClick(skillsRef)}
                        color="green"
                        title="Skills"
                    />
                </li>
                <li>
                    <NavLink
                        onClick={() => handleNavLinkClick(educationRef)}
                        color="brown"
                        title="Education"
                    />
                </li>
                <li>
                    <NavLink
                        onClick={() => handleNavLinkClick(contactRef)}
                        color="indigo"
                        title="Contact"
                    />
                </li>
                <li>
                    <NavLink
                        onClick={() => {
                            window.open(resumePdf, "_blank", "fullscreen=yes");
                        }}
                        color="orange"
                        title="Resume"
                    />
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
