import React, { Fragment } from "react";

import Header from './Header/Header';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {

    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor </a>
                Coded by <a href="https"> George </a>
            </div>
        </Fragment>
    )
}

export default App;