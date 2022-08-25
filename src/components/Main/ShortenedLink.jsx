import React, { useState } from "react";

import { CopyTextToClipboard } from "../UI/Clipboard";
import Button from "../UI/Button";
import classes from '../Main/ShortenedLink.module.css';

const ShortenedLink = (props) => {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = () => {
        CopyTextToClipboard(props.shortenedUrl)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 400);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className={classes.shortenedLink}>
            <p>{props.reUrl}</p>
            <hr />
            <div className={classes.copyLink}>
                <a href={props.shortenedUrl}>{props.shortenedUrl}</a>
                <Button
                    className={`${classes.copy} ${isCopied && classes.copied}`}
                    onClick={handleCopyLink} >{isCopied ? "Copied!" : "Copy"}</Button>
            </div>
        </div>
    )
}

export default ShortenedLink;