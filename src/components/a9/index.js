import React from "react";
import {Link} from "react-router-dom";

const A9 = () => {
    return (
        <div>
            <h2>Assignment 9</h2>
            <Link to="/a9/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a9/twitter/explore">
                Build
            </Link>
        </div>
    )
};

export default A9;