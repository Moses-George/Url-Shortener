import React from "react";

import classes from './Statistic.module.css';

const Statistic = (props) => {

    return (
        <div className={classes.statistic}>
            <img src={props.imageUrl} alt="" />
            <h3> {props.title} </h3>
            <p> {props.content} </p>
        </div>
    )
}

export default Statistic;