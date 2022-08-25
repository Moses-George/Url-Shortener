import React from "react";

import classes from './Boost.module.css'
import Button from "../UI/Button";

const Boost = () => {

    return (
        <div className={classes.boost}>
            <h1>Boost your links today</h1>
            <Button>Get Started</Button>
        </div>
    )
}

export default Boost;