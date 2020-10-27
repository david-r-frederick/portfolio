import React from 'react';
import classes from './SectionHeaderBar.module.css';

class SectionHeaderBar extends React.Component {
    render() {
        return (
            <div className={classes.bar}>
                <h1 className={classes.title}>{this.props.title}</h1>
            </div>
        );
    }
}

export default SectionHeaderBar;
