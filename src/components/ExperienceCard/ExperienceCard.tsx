import React, { Fragment } from "react";
import Card from "../Card/Card";
import classes from "./ExperienceCard.module.scss";

interface IExperienceCardProps {
    company: string;
    companyDescription: string;
    startMonthYear: string; // e.g. Sep 2018
    endMonthYear: string; // e.g. Apr 2020
    experience: Array<{
        title: string;
        points: Array<string>;
    }>;
    imgAlt: string;
    imgSrc: string;
    location: string; // e.g. Beaumont, TX
    role: string;
}

export const ExperienceCard = (props: IExperienceCardProps): JSX.Element => {
    const {
        company,
        companyDescription,
        startMonthYear, // e.g. Sep 2018
        endMonthYear, // e.g. Apr 2020
        experience,
        imgAlt,
        imgSrc,
        location, // e.g. Beaumont, TX
        role,
    } = props;

    return <Card>
        <div className="my-3 mx-3">
            <div className={`d-flex ${classes.experienceContent}`}>
                <img
                    className={classes.experienceImg}
                    src={imgSrc}
                    alt={imgAlt} />
                <div
                    className={`d-flex align-items-center justify-content-between w-100 mx-3 ${classes.expText}`}>
                    <h2 className="h5">{company}</h2>
                    <h4 className="h6">{role}</h4>
                </div>
            </div>
            <br />
            <div>
                <p>
                    <i>{companyDescription}</i>
                </p>
                {experience && experience.map(({ title, points }) => {
                    return <Fragment key={title}>
                        <br />
                        <h5 className="text-uppercase h6 small">{title}</h5>
                        <ul>
                            {points.map(p => (
                                <li className={classes.experienceBullet}>{p}</li>
                            ))}
                        </ul>
                    </Fragment>
                })}
                <br />
                <p>{startMonthYear} - {endMonthYear} | {location}</p>
            </div>
        </div>
    </Card>
};

export default ExperienceCard;
