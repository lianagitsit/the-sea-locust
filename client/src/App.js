import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Background from "./pages/Background";
import Testimonials from "./pages/Testimonials";
import Enroll from "./pages/Enroll";

import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Navbar";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/enroll" component={Enroll} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
