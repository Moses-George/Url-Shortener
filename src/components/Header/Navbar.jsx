import React, { Fragment, useState } from "react";

import { ReactComponent as Logo } from '../../Assests/images/logo.svg';
import hamburger from '../../Assests/images/icon-hamburger.svg';
import close from '../../Assests/images/icon-cross.svg';

import Button from "../UI/Button";
import MenuModal from "../UI/MenuModal";
import classes from '../Header/Navbar.module.css';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prev => !prev)
    }

    return (
        <Fragment>
            {isVisible && <MenuModal onClick={() => setIsVisible(false)} />}
            <nav>
                <div className={classes.navlinks}>
                    <Logo className={classes.logo} />
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className={classes['navbar-btn']}>
                    <Button className={classes.login} >Login</Button>
                    <Button className={classes.signUp}>Sign Up</Button>
                    <img
                        src={isVisible ? close : hamburger}
                        alt=""
                        className={`${isVisible && classes.fixed}`}
                        onClick={handleClick} />
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;