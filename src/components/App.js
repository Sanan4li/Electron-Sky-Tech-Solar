import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "../assets/css/main.css";
import SideBar from "./SideBar";
import MainArea from "./MainArea";
import Stock from './Stock';
import Payments from './Payments';
import Projects from './Projects';
import AddProject from './AddProject';
import Demand from './Demand';
import Quotes from './Quotes';
import Used from './Used';
import Reports from './Reports';
import About from './About';
import Contact from './Contact';
import Report from './Report';
import Developer from './Developer';
function App() {
  return (
    <Router>
      <div>
        <SideBar/>
        <Switch>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/payments">
           <Payments />
          </Route>
          <Route path="/projects">
           <Projects />
          </Route>
          <Route path="/addproject">
           <AddProject />
          </Route>
          <Route path="/demand">
            <Demand />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/used">
            <Used />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/">
            <MainArea />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}


export default App;
