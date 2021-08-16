import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/css/main.css";
import "../assets/css/toast.css";
import SideBar from "./SideBar";
import MainArea from "./MainArea";
import Stock from "./Stock/Stock";
import Payments from "./Payments";
import Projects from "./Projects/Projects";
import AddProject from "./Projects/AddProject";
import Demand from "./Demand";
import Quotes from "./Quotes";
import Used from "./Used";
import Reports from "./Reports";
import About from "./About";
import Contact from "./Contact";
import Report from "./Report";
import Developer from "./Developer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SideBar />
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
          <Route path="/addProject">
            <AddProject />
          </Route>
          <Route path="/">
            <MainArea />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
