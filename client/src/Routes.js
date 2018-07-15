import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Background from "./pages/Background";
import Testimonials from "./pages/Testimonials";
import Enroll from "./pages/Enroll";
import EnrollSuccess from "./pages/EnrollSuccess";
import NoMatch from "./pages/NoMatch";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPortal from "./pages/Admin/AdminPortal";

export default ({ childProps }) =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/course" component={Course} />
    <Route exact path="/background" component={Background} />
    <Route exact path="/testimonials" component={Testimonials} />
    <Route exact path="/enroll" component={Enroll} />
    <Route exact path="/enroll-success" component={EnrollSuccess} />

    <AppliedRoute exact path="/admin" component={AdminLogin} props={childProps} />
    <AppliedRoute exact path="/admin-portal" component={AdminPortal} props={childProps} />

    <Route component={NoMatch} />
  </Switch>;