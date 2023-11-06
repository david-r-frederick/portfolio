import React, { PropsWithChildren } from 'react';
import classes from './Card.module.css';

const Card = (props: PropsWithChildren<any>) => {
  return (
    <div className={`${classes.card} mx-5 mx-lg-5 mx-sm-0 mx-xxl-0 p-2`}>
      {props.children}
    </div>
  );
};

export default Card;