import React, { useEffect, useState, useRef} from "react";

import Button from "../UI/Button";
import classes from '../Main/Input.module.css';

const Input = ({setError, setIsLoading, onSubmitUrl}) => {

    const [userInput, setUserInput] = useState("");
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

    let error = "Unable to fetch shortened link";

    const fetchData = async (input) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
            const data = await response.json();
             error = data.error;
             const Links = {
                id: Math.random().toString(),
                reLink: userInput,
                shortenedLink: data.result.full_short_link
            };
            onSubmitUrl(Links);
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
          setUserInput("");
        };
    };

    return (
        <div className={classes.inputArea}>
            <form className={`${classes.form} ${isInvalid && classes.invalid}`} onSubmit={submitUrl} >
                <input
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