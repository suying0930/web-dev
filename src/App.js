import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import './App.css';
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import HelloWorld from "./components/a7/HelloWorld";

const reducer = combineReducers({tweets:tweets, who, profile})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <Route path="/a7/hello" exact={true}>
                      <HelloWorld/>
                  </Route>
                  <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  <Route path="/a7/twitter">
                      <Build/>
                  </Route>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
