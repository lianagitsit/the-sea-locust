import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Jumbotron from "../../components/Jumbotron";

const Home = () => (
  <div className="home__body">
    <Jumbotron>
      <div className="container">
        <h1>1L sucks.</h1>
        <h3>It doesn't have to.</h3>
      </div>
    </Jumbotron>

    <div className="container welcome-text__container">
      <h1>Welcome</h1>
      <p className="welcome-text">Looking to get the best grades in law school? I can help! 2017 was my fourth year offering a strategy course to demystify law school exams and help you land at the top of the class. Many of my former students have used the course to maximize their 1L GPA, then gone on to secure prestigious law firm jobs and federal clerkships.</p>
    </div>

    <Link to="/background">
      <div className="container-fluid moreBackground__container">
        <div className="container">
          <p className="moreBackground__text">More background: how this course can improve your grades</p>
        </div>
      </div>
    </Link>

  </div>
);

export default Home;
