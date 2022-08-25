import React from "react";

import { ReactComponent as Logo } from '../../Assests/images/logo-white.svg';
import { ReactComponent as Facebook } from '../../Assests/images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../Assests/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../Assests/images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../Assests/images/icon-instagram.svg';

import classes from '../Footer/Footer.module.css';

const Footer = () => {

    return (
        <footer>
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={classes['footer-links']}>
                <div className={classes.links}>
                    <p>Features</p>
                    <p>Link Shortening</p>
                    <p>Brand Links</p>
                    <p>Analytics</p>
                </div>
                <div className={classes.links}>
                    <p>Resources</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div className={classes.links}>
                    <p>Company</p>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className={classes.icons}>
                    <Facebook />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer;