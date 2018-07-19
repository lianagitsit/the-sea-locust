import React from "react";
import { Link } from "react-router-dom";

import "./Background.css";

const styles = {
    link: {
        textDecoration: "none"
    }
}

const Background = () => (
  <div className="body-container">
      <h3>More background: how this course can improve your grades</h3>
      <p className="background-text">Law professors notoriously “hide the ball” and don’t make it clear how to succeed on finals, despite the tremendous impact those exams will have on your career. One of my professors likened it to spending a semester reading about the history of swimming and then getting thrown into a pool for a race.</p>
      
      <p className="background-text">Worse still, the curve means you’ll be competing against incredibly smart and motivated peers. When you sit for exams, everyone is going to know the material – as Getting to Maybe says, law school is a place where just knowing the material isn’t enough. To earn top grades, you’ll need to have perfected the skill of applying the law and performing sophisticated legal analysis.</p>
      
      <p className="background-text">I have discovered that professors generally look for the same thing on exams, and grade their exams in a largely consistent manner. Getting an A “just” means getting a lot of points – but nobody will ever tell you directly how to get those points. Many students devote absurd amounts of effort to studying the law in hopes it will get them good grades, only to discover that grades depend far more on the skill of taking the exam than on the level of substantive preparation. The course is designed to make exams your priority from day one, and to teach you how to destroy the curve by focusing on the dark art of exam grading. Understanding the grading process is the key to mastering the skill of writing a killer exam.</p>
      
      <p className="background-text">I want to teach you that skill. I want to remove all the noise and uncertainty and mind-games, help you hone the abilities you will need to impress the hell out of your professors, and reap the huge rewards our industry rains on those who ace their exams.</p>
      
      <p className="background-text">The first year of law school is immensely stressful and critical for your future career. Why go it alone?</p>

    <Link to="/course">
          <p>Learn more about course offerings.</p>
    </Link>

    <Link to="/testimonials">
          <p>Read testimonials from prior students.</p>
    </Link>

    <Link to="/enroll" style={styles.link}>
          <p>Enroll!</p>
    </Link>
    </div>

);

export default Background;
