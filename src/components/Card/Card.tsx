import React, { PropsWithChildren } from 'react';
import classes from './Card.module.css';

const Card = (props: PropsWithChildren<any>) => {
  return (
    <div className={`${classes.card} p-2`}>
      {props.children}
    </div>
  );
};

export default Card;