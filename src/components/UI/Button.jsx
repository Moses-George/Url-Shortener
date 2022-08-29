import React from "react";

import classes from '../UI/Button.module.css';

const Button = ({onClick, children, className}) => {
    return <button
        className={`${classes.button} ${className}`}
        onClick={onClick} > {children} </button>
}

export default Button;