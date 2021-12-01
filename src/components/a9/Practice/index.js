import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";

export const Practice = () => {
    return(
        <>
            <h1>A9 Practice</h1>
            <Link to="/a9/hello">
                Hello
            </Link> |
            <Link to="/a9/twitter/home">
                Twitter
            </Link>
            <Movies/>
        </>
    )
};

export default Practice;