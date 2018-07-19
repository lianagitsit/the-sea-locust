import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import "./Home.css";

const Home = () => (
    <div className="container body-container">
      <h1>Welcome</h1>
      <p className="welcome-text">Looking to get the best grades in law school? I can help! 2017 was my fourth year offering a strategy course to demystify law school exams and help you land at the top of the class. Many of my former students have used the course to maximize their 1L GPA, then gone on to secure prestigious law firm jobs and federal clerkships.</p>
      <h3 id="background">More background: how this course can improve your grades</h3>
      <p>Law professors notoriously “hide the ball” and don’t make it clear how to succeed on finals, despite the tremendous impact those exams will have on your career. One of my professors likened it to spending a semester reading about the history of swimming and then getting thrown into a pool for a race.</p>
      
      <p>Worse still, the curve means you’ll be competing against incredibly smart and motivated peers. When you sit for exams, everyone is going to know the material – as Getting to Maybe says, law school is a place where just knowing the material isn’t enough. To earn top grades, you’ll need to have perfected the skill of applying the law and performing sophisticated legal analysis.</p>
      
      <p>I have discovered that professors generally look for the same thing on exams, and grade their exams in a largely consistent manner. Getting an A “just” means getting a lot of points – but nobody will ever tell you directly how to get those points. Many students devote absurd amounts of effort to studying the law in hopes it will get them good grades, only to discover that grades depend far more on the skill of taking the exam than on the level of substantive preparation. The course is designed to make exams your priority from day one, and to teach you how to destroy the curve by focusing on the dark art of exam grading. Understanding the grading process is the key to mastering the skill of writing a killer exam.</p>
      
      <p>I want to teach you that skill. I want to remove all the noise and uncertainty and mind-games, help you hone the abilities you will need to impress the hell out of your professors, and reap the huge rewards our industry rains on those who ace their exams.</p>
      
      <p>The first year of law school is immensely stressful and critical for your future career. Why go it alone?</p>

    <Link to="/course">
          <p>Learn more about course offerings.</p>
    </Link>

    <Link to="/testimonials">
          <p>Read testimonials from prior students.</p>
    </Link>

    <Link to="/enroll">
          <p>Enroll!</p>
    </Link>
    </div>
);

export default Home;
