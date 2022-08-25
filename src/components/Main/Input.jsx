import React, { useEffect, useState, useRef} from "react";

import Button from "../UI/Button";
import classes from '../Main/Input.module.css';

const Input = (props) => {

    const [userInput, setUserInput] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const InputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
            userInput.trim().length > 0 &&  setIsInvalid(false);
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [userInput]);

    const Links = {
        id: Math.random().toString(),
        reLink: userInput,
        shortenedLink: shortenedUrl
    };

    let error = "Unable to fetch shortened link";

    const {setError, setIsLoading} = props;

    const fetchData = async (input) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
            const data = await response.json();
            console.log(data);
             error = data.error;
            setShortenedUrl(data.result.full_short_link); 
            console.log(shortenedUrl);
        } catch (e) {
            setError(error);
            console.log(e);
        };
        setIsLoading(false);
    };

    const submitUrl = (e) => {
        e.preventDefault();
        if (userInput.trim().length === 0) {
            setIsInvalid(true);
            InputRef.current.focus();
            return;
        } else {
            fetchData(userInput);
          props.onSubmitUrl(Links);
          setUserInput("");
        };
    };

    return (
        <div className={classes.inputArea}>
            <form className={`${classes.form} ${isInvalid && classes.invalid}`} onSubmit={submitUrl} >
                <input
                    type="url"
                    ref={InputRef}
                    onChange={(e)=>  setUserInput(e.target.value)}
                    onFocus={()=> setError("")}
                    value={userInput}
                    placeholder="shorten a link here..." />
                <Button >Shorten it!</Button>
            </form>
            {isInvalid && <i>please add a link</i>}
        </div>
    )
}

export default Input;