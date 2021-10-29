import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import './App.css';
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a6/build" exact={true}>
                  <Build/>
              </Route>
              <Route path="/a6/twitter/home" component={HomeScreen} exact={true}/>
              <Route path="/a6/twitter/explore" component={ExploreScreen} exact={true}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
