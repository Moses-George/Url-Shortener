import React, { Fragment } from "react";
import ReactDOM from "react-dom"

import classes from '../UI/MenuModal.module.css';
import Button from "./Button";


const Backdrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop} />
}

const MenuModalOverlay = () => {

    return (
        <div className={classes.menu}>
            <div className={classes['menu-links']}>
                <a href="https">Features</a>
                <a href="https">Pricing</a>
                <a href="https">Resources</a>
            </div>
            <hr />
            <div className={classes.btn}>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    )
}

const MenuModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />,
                document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<MenuModalOverlay />,
                document.getElementById("modal-root"))}
        </Fragment>
    )
}

export default MenuModal;