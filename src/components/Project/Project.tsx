import React from "react";
import classes from "./Project.module.css";

interface IProjectProps {
    title: string;
    technologies: string;
    codeHref: string;
    projectHref: string;
    projectImage: string;
    altMessage: string;
}

const Project = (props: IProjectProps) => {
    const { title, technologies, codeHref, projectHref, projectImage, altMessage } = props;

    return (
        <div className={`${classes.projectContainer}`}>
            <h2 className={classes.projectTitle}>{title}</h2>
            <h3 className={classes.projectTechnologies}>{technologies}</h3>
            <img className={classes.projectImg}
                src={projectImage}
                alt={altMessage} />
            <a rel="noopener noreferrer"
                target="_blank"
                href={projectHref}
                className={`${classes.viewProjectBtn} ${classes.projectButton}`}>
                View Project
            </a>
            <a rel="noopener noreferrer"
                target="_blank"
                href={codeHref}
                className={`${classes.seeCodeBtn} ${classes.projectButton}`}>
                See Code
            </a>
        </div>
    );
};

export default Project;
