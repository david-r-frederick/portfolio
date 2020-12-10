import React, { Fragment } from 'react';
import classes from './Project.module.css';

const Project = (props) => {
    const { title, technologies, codeHref, projectHref, projectImage, altMessage } = props;
    return (
        <Fragment>
            <div className={`${classes.projectContainer}`}>
                <h2 className={classes.projectTitle}>{title}</h2>
                <h3 className={classes.projectTechnologies}>{technologies}</h3>
                <img className={classes.projectImg} src={projectImage} alt={altMessage} />
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={projectHref}
                    className={`${classes.viewProjectBtn} ${classes.projectButton}`}
                >
                    View Project
                </a>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={codeHref}
                    className={`${classes.seeCodeBtn} ${classes.projectButton}`}
                >
                    See Code
                </a>
            </div>
        </Fragment>
    );
};

export default Project;
