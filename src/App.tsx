import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import SectionHeaderBar from "./components/SectionHeaderBar/SectionHeaderBar";
import classes from "./App.module.css";
import { AiOutlineMail, AiOutlinePhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiCodewars, SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/si";
import BurgerBuilderImg from "./assets/img/BurgerBuilderBig.png";
import OmnifoodImg from "./assets/img/OmnifoodBig.png";
import BugTrackerImg from "./assets/img/BugTrackerBig.png";
import CSSPressMeImg from "./assets/img/CSSPressMeBig.png";
import WeatherAppImg from "./assets/img/WeatherAppBig.png";
import ContactItem from "./components/ContactItem/ContactItem";
import LamarUniversityImg from "./assets/img/LamarUniversity.jpg";
import TXARNGImg from "./assets/img/TXARNG.svg";
import Project from "./components/Project/Project";
import Card from "./components/Card/Card";
import "./scss/index.scss";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import { Section } from "./components/Section/Section";

interface IAppState {
    sidebarTogg: boolean;
}

class App extends React.Component<{}, IAppState> {
    aboutRef: React.LegacyRef<HTMLDivElement> | null = null;
    experienceRef: React.LegacyRef<HTMLDivElement> | null = null;
    projectsRef: React.LegacyRef<HTMLDivElement> | null = null;
    skillsRef: React.LegacyRef<HTMLDivElement> | null = null;
    educationRef: React.LegacyRef<HTMLDivElement> | null = null;
    contactRef: React.LegacyRef<HTMLDivElement> | null = null;
    resumeRef: React.LegacyRef<HTMLDivElement> | null = null;

    constructor(props: {}) {
        super(props);
        this.aboutRef = React.createRef();
        this.experienceRef = React.createRef();
        this.projectsRef = React.createRef();
        this.skillsRef = React.createRef();
        this.educationRef = React.createRef();
        this.contactRef = React.createRef();
        this.resumeRef = React.createRef();
        this.state = {
            sidebarTogg: false,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                this.setState({ sidebarTogg: false });
            }
        });
    }

    closeSideBar = () => {
        this.setState({ sidebarTogg: false });
    };

    render() {
        const { aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef, resumeRef } = this;

        return (
            <div className={classes.App}>
                <SideBar
                    refs={{ aboutRef, experienceRef, projectsRef, skillsRef, educationRef, contactRef }}
                    toggled={this.state.sidebarTogg}
                    closeSidebar={() => {
                        this.closeSideBar();
                    }}
                />
                {this.state.sidebarTogg ? <div onClick={this.closeSideBar} className={classes.blackCover}></div> : null}
                <div className={classes.topBar}>
                    <div className={classes.meBox}>
                        <h2 className={classes.name}>
                            David
                            <br />
                            Frederick
                        </h2>
                        <p className={classes.jobTitle}>Front-End Developer</p>
                    </div>
                </div>
                <button
                    className={classes.hamburgerButton}
                    onClick={() =>
                        this.setState((prevState) => {
                            return {
                                sidebarTogg: !prevState.sidebarTogg,
                            };
                        })
                    }
                >
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                </button>
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
                    {/* @ts-ignore */}
                    <Section title="experience" ref={this.experienceRef}>
                        <ExperienceCard
                            imgSrc={LamarUniversityImg}
                            imgAlt="Lamar University Logo"
                            company="Lamar University"
                            role="Tech Support & Admin. Specialist"
                            companyDescription="State university specializing in engineering that offers bachelor's,
                            master's, and doctorate level degrees."
                            experience={[
                                {
                                    title: "Media & web support",
                                    points: [
                                        `Collaborated with department decision-makers, analyzed existing websites for
                                        areas needing improvement, gathered requirements and desired website
                                        functionalities, and planning framework and content of new sites`,
                                        `Employed Cascade CMS to design, develop, and maintain 4 new department
                                        websites`,
                                        `Coordinated with support staff on the development of digital copy for dozens
                                        of new web pages`
                                    ]
                                },
                                {
                                    title: "Administrative support",
                                    points: [
                                        `Used Formstack and Google Forms to create, manage, and distribute over 35
                                        forms covering student specialization changes, special requests, transfers,
                                        and work authorizations.`,
                                        `Handled logistics and inventory management, supported budget monitoring
                                        and management activities, interviewed, and recruited support staff, and
                                        orchestrated over 50 biannual events`
                                    ]
                                }
                            ]}
                            startMonthYear="Sep 2018"
                            endMonthYear="Apr 2020"
                            location="Beaumont, TX" />
                        <ExperienceCard
                            imgSrc={LamarUniversityImg}
                            imgAlt="Lamar University Logo"
                            company="Lamar University"
                            role="Computer Lab Technician"
                            companyDescription="State university specializing in engineering that offers bachelor's,
                            master's, and doctorate level degrees."
                            experience={[
                                {
                                    title: "Local IT support",
                                    points: [
                                        `Provided on-site IT services by diagnosing and resolving software and
                                        hardware issues of department computers for students, faculty, and staff`,
                                        `Oversaw technology in classrooms and the office to include projectors,
                                        copiers, printers, scanners, and computers`,
                                        `Delivered excellent customer service by warmly greeting visitors, actively
                                        listening to needs, and asking for clarification when necessary`
                                    ]
                                }
                            ]}
                            startMonthYear="Sep 2012"
                            endMonthYear="May 2016"
                            location="Beaumont, TX" />
                        <ExperienceCard
                            imgSrc={TXARNGImg}
                            imgAlt="Texas Army National Guard Logo"
                            company="Texas Army National Guard"
                            role="Chaplain Assistant"
                            companyDescription="United States Military Branch specializing in ground operations."
                            experience={[
                                {
                                    title: "Religious support",
                                    points: [
                                        `Presented to executive staff on company morale, religions, and needs`,
                                        `Prepared for and helped to execute Sunday services`,
                                        `Cared for soldiers through prayers and visiting injured in hospital`
                                    ]
                                }
                            ]}
                            startMonthYear="Feb 2008"
                            endMonthYear="Mar 2014"
                            location="Houston, TX" />
                    </Section>
                    {/* @ts-ignore */}
                    <Section title="personal projects" ref={this.projectsRef}>
                        <Row className="my-4">
                            <Col xs={12} md={6}>
                                <Project
                                    title="CSS Press Me"
                                    technologies="CSS, React JS"
                                    codeHref="https://github.com/david-r-frederick/css-press-me"
                                    projectHref="https://csspressme.web.app/"
                                    projectImage={CSSPressMeImg}
                                    altMessage="CSS Press Me project image" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Project
                                    title="Bug Tracker"
                                    technologies="React JS, BootStrap, Firebase"
                                    codeHref="https://github.com/david-r-frederick/bug-tracker"
                                    projectHref="https://bug-tracker-6ea40.web.app/login"
                                    projectImage={BugTrackerImg}
                                    altMessage="Bug Tracker project image" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Project
                                    title="Burger Builder"
                                    technologies="React JS, Firebase"
                                    codeHref="https://github.com/david-r-frederick/burger-builder-demo"
                                    projectHref="https://react-my-burger-fc3a1.web.app/"
                                    projectImage={BurgerBuilderImg}
                                    altMessage="Weather app project image" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Project
                                    title="Omnifood"
                                    technologies="HTML, CSS, jQuery"
                                    codeHref="https://github.com/david-r-frederick/omnifood-website-demo"
                                    projectHref="https://david-r-frederick.github.io/omnifood-website-demo/"
                                    projectImage={OmnifoodImg}
                                    altMessage="Omnifood project image" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Project
                                    title="Weather App"
                                    technologies="React JS"
                                    codeHref="https://github.com/david-r-frederick/personal-react-demos/tree/master/weather-app-demo"
                                    projectHref="https://weather-app-3b941.web.app/current"
                                    projectImage={WeatherAppImg}
                                    altMessage="Weather app project image" />
                            </Col>
                        </Row>
                    </Section>
                    {/* @ts-ignore */}
                    <Section title="stack" ref={this.skillsRef}>
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
                    </Section>
                    {/* @ts-ignore */}
                    <Section title="education" ref={this.educationRef}>
                        <div className="d-flex flex-column my-3 mx-3">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://www.lamar.edu"
                                className={classes.educationPrimary}>
                                Lamar University
                            </a>
                            <p> Beaumont, TX</p>
                            <ul>
                                <li>B.A. in Psychology</li>
                                <li>Graduation Date: May 2016</li>
                            </ul>
                        </div>
                    </Section>
                    {/* @ts-ignore */}
                    <Section title="contact" ref={this.contactRef}>
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
                    </Section>
                </div>
            </div>
        );
    }
}

export default App;
