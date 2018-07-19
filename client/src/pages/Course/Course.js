import React from "react";
import { Link } from "react-router-dom";

import "./Course.css";

const Course = () => (
  <div className="container body-container">
    <h1 className="courseTitle">The Course</h1>
    <p>The course allows you to master the skills needed for top exam performance, and has been refined each semester for the past 4 years. In that time, it has helped more than 100 students from dozens of law schools.</p>

    <p>Here’s what it includes:</p>
      <ol>
        <li>My full-length guide to law school and law school exams. This multi-part guide, extensively edited and revised based on my experience working with students over the past few years, covers strategies for reading, studying, and exam taking. Totaling almost 20,000 words, this will lay the foundation for the study habits and exam writing techniques necessary to get top grades.</li>
        <li>Two custom practice exams with personalized grading and feedback. Twice during the semester we will work through practice exams that I have prepared for teaching exam skills. I’ll provide personalized grading and written feedback, as well as group comments based on everyone’s performance.</li>
        <li>Grading and feedback on one of your professor’s practice questions. After you’ve done the two practice exam questions I have written, I’ll grade a practice exam from your professors and provide detailed feedback.</li>
        <li>Unlimited email consultation, strategizing, Q&amp;A, and life coaching. I’ll be there to respond to questions, work on strategy, and provide advice and encouragement all semester via email. Whether it’s coming up with a study strategy, analyzing your professors, or reviewing feedback on your practice exams, I’ll be there for you night and day.</li>
        <li>Weekly advice emails. At the beginning of each week you’ll receive an email with tips, encouragement, and advice based on where we are in the semester.</li>
        <li>Copies of my 1L study materials. A complete collection of my 1L outlines, examples of my case briefs, and a sample of my exam writing from a practice question.</li>
        <li>My exam strategy research collection. For the truly obsessive – a treasure trove of law review articles, blog posts, quotes, and strategy guides about law school success that I’ve collected over the years.</li>
      </ol>

      <p>The base course is designed to be comprehensive, providing all of the knowledge, practice, feedback, and support necessary to maximize your potential for great grades. However, if you’re looking for more help, additional practice exam grading or one-on-one phone sessions can be purchased at an hourly rate.</p>

      <p>To be clear, there are a few things you should not expect. The course is NOT:</p>
      <ol>
        <li>Substantive law tutoring. The course will not teach you torts or civil procedure. It will help you choose efficient study strategies, avoid wasting time, and master the skill of exam writing, but you’re responsible for learning the substantive law on your own.</li>
        <li>Sketchy. I won’t take your exams for you, provide you with any kind of privileged information, or do anything that would be even slightly ethically questionable.</li>
        <li>A panacea. 1L is an enormous amount of work, and you’ll have to put in the time to master both the material and the skills we cover. Just signing up won’t get you As.</li>
      </ol>

    <Link to="/enroll">
      <p>Click here if you're ready to enroll.</p>
    </Link>
  </div>
);

export default Course;
