import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

export const Practice = () => {
    return(
        <>
            <h1>A6 Practice</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice;

