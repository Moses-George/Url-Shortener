
import React from "react";

import Button from "../UI/Button";
import HeaderImage from '../../Assests/images/illustration-working.svg';
import classes from '../Header/HeaderIntro.module.css';

const HeaderIntro = () => {

    return (
        <section className={classes.headerIntro} >
            <summary className={classes.summary}>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button  className={classes.button} >Get Started</Button>
            </summary>
            <div className={classes.headerImage}>
                <img src={HeaderImage} alt="" />
            </div>
        </section>
    )
}

export default HeaderIntro;