import React, { useState } from "react";

import Input from "./Input";
import ShortenedLink from "./ShortenedLink";
import Description from "./Description";
import Statistic from "./Statistic";
import Boost from "./Boost";

import recognition from '../../Assests/images/icon-brand-recognition.svg';
import detailed from '../../Assests/images/icon-detailed-records.svg';
import customizable from '../../Assests/images/icon-fully-customizable.svg';

import classes from '../Main/Main.module.css';
import Spinner from "../UI/Spinner";

const StatisticsData = [
    {
        id: 1,
        title: "Brand recognition",
        content: "Boost your brand recognition with each click. Generic links don’tmean a thing. Branded links help instil confidence in your content.",
        Image: recognition,
    },
    {
        id: 2,
        title: "Detailed Records",
        content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        Image: detailed,
    },
    {
        id: 3,
        title: "Fully customizable",
        content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        Image: customizable
    }
];

const Main = () => {

    const [links, setLinks] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const addNewLink = (newLink) => {
        setLinks(prev => [...prev, newLink]);
    }

    const generatedLink = links.map(link =>
        <ShortenedLink
            key={link.id}
            reUrl={link.reLink}
            shortenedUrl={link.shortenedLink}
        />)

    return (
        <main className={classes.main}>
            <Input
                onSubmitUrl={addNewLink}
                setIsLoading={setIsLoading}
                error={error}
                setError={setError} />
            <div className={classes.shortenedLinks}>
                {isloading ? <Spinner /> : error ? null : links.length !== 0 && generatedLink}
                {error && <div className={classes.error}><span>Error</span>: {error}</div>}
            </div>
            <Description />
            <div className={classes.line} />
            <div className={classes.statistics}>
                {StatisticsData.map(data =>
                    <Statistic
                        key={data.id}
                        title={data.title}
                        content={data.content}
                        imageUrl={data.Image}
                    />)}
            </div>
            <Boost />
        </main>
    )
}

export default Main;