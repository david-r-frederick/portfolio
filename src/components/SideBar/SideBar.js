import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavLink from '../NavLink/NavLink';
import classes from './SideBar.module.css';

class SideBar extends React.Component {
    scrollToHeader(ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
      const { aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef } = this.props.refs;
        return (
            <Navbar className={classes.navContainer} expand="lg">
                <div className={classes.meBox}>
                    <h2 className={classes.name}>
                        David<br/>Frederick
                    </h2>
                    <p className={classes.jobTitle}>Front-End Developer</p>
                </div>
                <Navbar.Toggle onClick={this.props.sidebarToggled} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={classes.collapseContainer} id="basic-navbar-nav">
                    <Nav className={classes.navCustom}>
                        <ul className={classes.navLinksContainer}>
                            <NavLink onClick={() => {
                                this.scrollToHeader(aboutRef);
                            }} color="blue" ref="about" title="About" />
                            <NavLink onClick={() => {
                                this.scrollToHeader(experienceRef);
                            }} color="yellow" ref="experience" title="Experience" />
                            <NavLink onClick={() => {
                                this.scrollToHeader(projectsRef);
                            }} color="red" ref="projects" title="Projects" />
                            <NavLink onClick={() => {
                                this.scrollToHeader(skillsRef);
                            }} color="green" ref="skills" title="Skills" />
                            <NavLink onClick={() => {
                                this.scrollToHeader(educationRef);
                            }} color="brown" ref="education" title="Education" />
                            <NavLink onClick={() => {
                                this.scrollToHeader(contactRef);
                            }} color="indigo" ref="contact" title="Contact" />
                            <NavLink color="orange" ref="resume" title="Resume" />
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default SideBar;
