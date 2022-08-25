import React from "react";

import classes from './Spinner.module.css'

const Spinner = () => {

    return (
        <div className={classes.spinner}>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
            <div className={classes.circle3}></div>
        </div>
    )
}

export default Spinner;