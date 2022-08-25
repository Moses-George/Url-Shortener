import React from "react";

import classes from './Description.module.css';

const Description = () => {

    return (
        <summary className={classes.summary}>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
        </summary>
    )
}

export default Description;