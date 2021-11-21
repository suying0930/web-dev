import React from "react";
import {Link} from "react-router-dom";

const A8 = () => {
    return (
        <>
            <h2>Assignment 8</h2>
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/twitter/explore">
                Build
            </Link> | &nbsp;
            <Link to="/a8/twitter/home">
                Challenge
            </Link>
        </>
    )
};

export default A8;