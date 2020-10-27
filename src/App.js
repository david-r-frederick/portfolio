import React from 'react';
import SideBar from './components/SideBar/SideBar';
import SectionHeaderBar from './components/SectionHeaderBar/SectionHeaderBar';
import classes from './App.module.css';
import { AiOutlineMail, AiOutlinePhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import { SiBootstrap, SiCodewars, SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import BurderBuilderImg from './assets/img/BurgerBuilderBig.png';
import OmnifoodImg from './assets/img/OmnifoodBig.png';
import BugTrackerImg from './assets/img/BugTrackerBig.png';
import WeatherAppImg from './assets/img/WeatherAppBig.png';
import ContactItem from './components/ContactItem/ContactItem';
import Card from './components/Card/Card';
import LamarUniversityImg from './assets/img/LamarUniversity.jpg';
import PAISDImg from './assets/img/PAISD.jpg';
import TXARNGImg from './assets/img/TXARNG.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();
        this.experienceRef = React.createRef();
        this.projectsRef = React.createRef();
        this.skillsRef = React.createRef();
        this.educationRef = React.createRef();
        this.contactRef = React.createRef();
        this.state = {
          sidebarTogg: false,
        }
    }

    render() {
        const { aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef } = this;
        return (
            <div className={classes.App}>
                <SideBar refs={{ aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef }}
                sidebarToggled={() => this.setState((prevState) => {
                  return {
                    sidebarTogg: !prevState.sidebarTogg,
                  }
                })} />
                {this.state.sidebarTogg ? <div className={classes.blackCover}></div> : null}
                <div className={classes.sectionsContainer}>
                    <div ref={this.aboutRef}>
                        <SectionHeaderBar id="about" title="ABOUT" />
                    </div>
                    <div className={`container ${classes.about}`}>
                        <p className={classes.text}>
                            I graduated in 2016 with my Bachelor's degree in psychology and have decided to leverage
                            that experience towards front-end development, using what I know of how people think to
                            create great experiences for them. I enjoy working with Javascript and React the most, but
                            am constantly improving by learning other languages and frameworks. I am currently learning
                            React Native and SQL. <br />
                            <br /> I worked in an IT environment for four years during college and spent a majority of
                            my time in my previous roll working on digital design and handling technology aspects of the
                            office- to include rebuilding their website. To view my rebuild, click here.
                        </p>
                    </div>
                    <div ref={this.experienceRef}>
                        <SectionHeaderBar id="experience" title="EXPERIENCE" />
                    </div>
                    <div className="container my-4">
                        <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-row ${classes.experienceContent}`}>
                                    <img
                                        className={classes.experienceImg}
                                        src={LamarUniversityImg}
                                        alt="Lamar University Logo"
                                    />
                                    <div className={`d-flex align-items-center justify-content-between w-100 mx-3 ${classes.expText}`}>
                                        <h2>Lamar University</h2>
                                        <h4>Tech Support &#38; Admin. Specialist</h4>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        <i>
                                            State university specializing in engineering that offers bachelor's,
                                            master's, and doctorate level degrees.
                                        </i>
                                    </p>
                                    <h5>MEDIA &amp; WEB SUPPORT</h5>
                                    <ul>
                                        <li className={classes.experienceBullet}>
                                            Completed redesign of 4 department websites using a CMS
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Managed all media platforms: Facebook, FormStack, Setmore, Outlook, Google
                                            Forms{' '}
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Designed digital marketing materials, flyers, and programs for 50+ biannual
                                            events
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Trained and supervised team of 4 employees
                                        </li>
                                    </ul>
                                    <br />
                                    <h5>ADMINISTRATIVE SUPPORT</h5>
                                    <ul>
                                        <li className={classes.experienceBullet}>
                                            Created comprehensive office policies and procedures manual
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Provided excellent customer service to students, faculty, staff, and
                                            visiting professors
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Assist in execution of hurricane response operations to assist international
                                            students in evacuation and inquiries
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Coordinate events to include: reserving space, ordering supplies, and
                                            fundraising
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Sep 2018 - Apr 2020 | Beaumont, TX</p>
                                </div>
                            </div>
                        </Card>
                        {/* <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-row ${classes.experienceContent}`}>
                                    <img
                                        className={classes.experienceImg}
                                        src={LamarUniversityImg}
                                        alt="Lamar University Logo"
                                    />
                                    <div className="d-flex align-items-center justify-content-between w-100 mx-3">
                                        <h2>Lamar University</h2>
                                        <h4>Human Resources Assistant</h4>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        <i>
                                            State university specializing in engineering that offers bachelor's,
                                            master's, and doctorate level degrees.
                                        </i>
                                    </p>
                                    <h5>FRONT DESK &amp; ONBOARDING</h5>
                                    <ul>
                                        <li className={classes.experienceBullet}>
                                            Improved and managed the employee onboarding process of compiling hiring
                                            packets, background checks, and verifying I-9s for over 400 employees
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Entered data into HRIS for creating and altering employee records
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Sep 2017 - Sep 2018 | Beaumont, TX</p>
                                </div>
                            </div>
                        </Card> */}
                        {/* <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-row ${classes.experienceContent}`}>
                                    <img
                                        className={classes.experienceImg}
                                        src={PAISDImg}
                                        alt="Port Arthur Independent School District Logo"
                                    />
                                    <div className="d-flex align-items-center justify-content-between w-100 mx-3">
                                        <h2>Port Arthur ISD</h2>
                                        <h4>9th Grade Spanish Teacher</h4>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        <i>Public school system for elementary to high school students.</i>
                                    </p>
                                    <h5>TEACHING</h5>
                                    <ul>
                                        <li className={classes.experienceBullet}>
                                            Prepared organized and logical lesson plans using all learning styles to
                                            engage students and promote learning
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Resolved conflicts between students in a timely and professional manner
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Maintained consistent contact with parents whose students were struggling
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Collaborated with other teacher in department for annual traditions and
                                            guidance
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Aug 2016 - Aug 2017 | Port Arthur, TX</p>
                                </div>
                            </div>
                        </Card> */}
                        <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-row ${classes.experienceContent}`}>
                                    <img
                                        className={classes.experienceImg}
                                        src={LamarUniversityImg}
                                        alt="Lamar University Logo"
                                    />
                                    <div className={`d-flex align-items-center justify-content-between w-100 mx-3 ${classes.expText}`}>
                                        <h2>Lamar University</h2>
                                        <h4>Computer Lab Technician</h4>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        <i>
                                            State university specializing in engineering that offers bachelor's,
                                            master's, and doctorate level degrees.
                                        </i>
                                    </p>
                                    <h5>LOCAL IT SUPPORT</h5>
                                    <ul>
                                        <li>
                                            Provided on-site IT services by diagnosing and resolving software and
                                            hardware issues of department computers for students, faculty, and staff
                                        </li>
                                        <li>
                                            Oversaw technology in classrooms and the office to include projectors,
                                            copiers, printers, scanners, and computers
                                        </li>
                                        <li>
                                            Delivered excellent customer service by warmly greeting visitors, actively
                                            listening to needs, and asking for clarification when necessary
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Sep 2012 - May 2016 | Beaumont, TX</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-row ${classes.experienceContent}`}>
                                    <img
                                        className={classes.experienceImg}
                                        src={TXARNGImg}
                                        alt="Texas Army National Guard Logo"
                                    />
                                    <div className={`d-flex align-items-center justify-content-between w-100 mx-3 ${classes.expText}`}>
                                        <h2>Texas Army National Guard</h2>
                                        <h4>Chaplain Assistant</h4>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        <i>United States Military Branch specializing in ground operations.</i>
                                    </p>
                                    <h5>RELIGIOUS SUPPORT</h5>
                                    <ul>
                                        <li className={classes.experienceBullet}>
                                            Presented to executive staff on company morale, religions, and needs
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Prepared for and helped to execute Sunday services
                                        </li>
                                        <li className={classes.experienceBullet}>
                                            Cared for soldiers through prayers and visiting injured in hospital
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Feb 2008 - Mar 2014 | Houston, TX</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div ref={this.projectsRef}>
                        <SectionHeaderBar title="PROJECTS" />
                    </div>
                    <div className="row d-flex justify-content-around my-4">
                        <div className={classes.projectContainer}>
                            <h2 className={classes.projectTitle}>Bug Tracker</h2>
                            <h3 className={classes.projectTechnologies}>React JS, Firebase</h3>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://bug-tracker-6ea40.web.app/login"
                                className={`${classes.viewProjectBtn} ${classes.projectButton}`}
                            >
                                View Project
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/david-r-frederick/bug-tracker"
                                className={`${classes.seeCodeBtn} ${classes.projectButton}`}
                            >
                                See Code
                            </a>
                            <img className={classes.projectImg} src={BugTrackerImg} alt="third project" />
                        </div>
                        <div className={`${classes.projectContainer}`}>
                            <h2 className={classes.projectTitle}>Burger Builder</h2>
                            <h3 className={classes.projectTechnologies}>React JS, Firebase</h3>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://react-my-burger-fc3a1.web.app/"
                                className={`${classes.viewProjectBtn} ${classes.projectButton}`}
                            >
                                View Project
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/david-r-frederick/burger-builder-demo"
                                className={`${classes.seeCodeBtn} ${classes.projectButton}`}
                            >
                                See Code
                            </a>
                            <img className={classes.projectImg} src={BurderBuilderImg} alt="first project" />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around my-4">
                        <div className={`${classes.projectContainer}`}>
                            <h2 className={classes.projectTitle}>Omnifood</h2>
                            <h3 className={classes.projectTechnologies}>HTML, CSS, jQuery</h3>
                            <img className={classes.projectImg} src={OmnifoodImg} alt="second project" />
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://david-r-frederick.github.io/omnifood-website-demo/"
                                className={`${classes.viewProjectBtn} ${classes.projectButton}`}
                            >
                                View Project
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/david-r-frederick/omnifood-website-demo"
                                className={`${classes.seeCodeBtn} ${classes.projectButton}`}
                            >
                                See Code
                            </a>
                        </div>
                        <div className={`${classes.projectContainer}`}>
                            <h2 className={classes.projectTitle}>Weather App</h2>
                            <h3 className={classes.projectTechnologies}>React JS</h3>
                            <img className={classes.projectImg} src={WeatherAppImg} alt="second project" />
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://weather-app-3b941.web.app/current"
                                className={`${classes.viewProjectBtn} ${classes.projectButton}`}
                            >
                                View Project
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/david-r-frederick/personal-react-demos/tree/master/weather-app-demo"
                                className={`${classes.seeCodeBtn} ${classes.projectButton}`}
                            >
                                See Code
                            </a>
                        </div>
                    </div>
                    <div ref={this.skillsRef}>
                        <SectionHeaderBar id="stack" title="STACK" />
                    </div>
                    <div className="container my-4">
                        <Card>
                            <div className={classes.stackRow}>
                                <div className={classes.stackItem}>
                                    <SiJavascript className={`${classes.stackIcon} ${classes.jsIcon}`} />
                                    <p>JavaScript</p>
                                </div>
                                <div className={classes.stackItem}>
                                    <SiCss3 className={`${classes.stackIcon} ${classes.cssIcon}`} />
                                    <p>CSS</p>
                                </div>
                                <div className={classes.stackItem}>
                                    <SiReact className={`${classes.stackIcon} ${classes.reactIcon}`} />
                                    <p>React</p>
                                </div>
                                <div className={classes.stackItem}>
                                    <SiHtml5 className={`${classes.stackIcon} ${classes.htmlIcon}`} />
                                    <p>HTML5</p>
                                </div>
                                <div className={classes.stackItem}>
                                    <SiBootstrap className={`${classes.stackIcon} ${classes.bootstrapIcon}`} />
                                    <p>BootStrap</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div ref={this.educationRef}>
                        <SectionHeaderBar id="education" title="EDUCATION" />
                    </div>
                    <div className="container my-4">
                        <Card>
                            <div className="my-3 mx-3">
                                <div className={`d-flex flex-column`}>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="http://www.lamar.edu"
                                        className={classes.educationPrimary}
                                    >
                                        Lamar University
                                    </a>
                                    <p> Beaumont, TX</p>
                                    <ul>
                                        <li>B.A. in Psychology</li>
                                        <li>Graduation Date: May 2016</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div ref={this.contactRef}>
                        <SectionHeaderBar id="contact" title="CONTACT" />
                    </div>
                    <div>
                        <ContactItem
                            tooltip="Copy Email"
                            href="/"
                            linkText="dfrederick79@gmail.com"
                            icon={AiOutlineMail}
                            target="/"
                            onClick={(event) => {
                                event.preventDefault();
                                navigator.clipboard.writeText('dfrederick79@gmail.com');
                                alert('Email copied');
                            }}
                        />
                        <ContactItem
                            tooltip="Copy Phone Number"
                            href="/"
                            linkText="409-543-7859"
                            icon={AiOutlinePhone}
                            target="/"
                            onClick={(event) => {
                                event.preventDefault();
                                navigator.clipboard.writeText('409-543-7859');
                                alert('Phone number copied');
                            }}
                        />
                        <ContactItem
                            tooltip="View my GitHub"
                            href="https://github.com/david-r-frederick"
                            linkText="https://github.com/david-r-frederick"
                            icon={AiFillGithub}
                            target="blank"
                        />
                        <ContactItem
                            tooltip="View my LinkedIn Profile"
                            href="https://www.linkedin.com/in/david-frederick-413b30ab/"
                            linkText="https://www.linkedin.com/in/david-frederick-413b30ab/"
                            icon={AiFillLinkedin}
                            target="blank"
                        />
                        <ContactItem
                            tooltip="View my HackerRank"
                            href="https://www.hackerrank.com/dfrederick79?hr_r=1"
                            linkText="https://www.hackerrank.com/dfrederick79?hr_r=1"
                            icon={FaHackerrank}
                            target="blank"
                        />
                        <ContactItem
                            tooltip="View my Codewars Kata"
                            href="https://www.codewars.com/users/d-frederick"
                            linkText="https://www.codewars.com/users/d-frederick"
                            icon={SiCodewars}
                            target="blank"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
