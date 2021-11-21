import React from "react";
import {Link} from "react-router-dom";
// import Classes from "./Classes";
// import Styles from "./Styles";
// import ConditionalOutput from "./ConditionalOutput";
// import TodoItem from "./Todo/TodoItem";
// import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";

export const Practice = () => {
    return(
        <>
            <h1>A8 Practice</h1>
            <Link to="/a8/hello">
                Hello
            </Link> |
            <Link to="/a8/twitter/home">
                Build
            </Link>
            <APIExamples/>
            <ReduxExamples/>
{/*            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>*/}
        </>
    )
};

export default Practice;