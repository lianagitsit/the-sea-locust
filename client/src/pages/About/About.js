import React, { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div className="container">
                <h1>About Me</h1>
                <p>Hello! I’m Eric Mancini (formerly Eric Martin), your relentlessly enthusiastic exam coach. While in law school I was tied for the highest GPA my 1L year at UVA, and for most of the past decade I have posted guides and advice as TheSeaLocust on top-law-schools.com. During law school I was on law review and heavily involved in our law school comedy show. After graduation and before starting this business I was a lawyer in the derivatives and structured products group at Davis Polk & Wardwell LLP in New York City.</p>
                <p>If you have any questions, just drop me a line at TheSeaLocust@gmail.com.</p>
                <p>If you’re ready to sign up, click here for the details on the enrollment process.</p>
                <Row>
                    <Col xs={6} md={3}>
                        <Image circle responsive src="http://www.thesealocust.com/wp/wp-content/uploads/2018/01/700pxheadshot.jpg" alt="" />
                    </Col>
                </Row>
                <h1 id="writing">Guides and Writings</h1>
                <p>Here are some of my prior guides on law school and legal employment:</p>
                <ol>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=22&t=120673">Law school exam guide</a> (winner of a TLS content competition award)</li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=123092">TLS Collected Wisdom on Success in Law School</a></li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=199175">Getting points on exams</a></li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=216920">1L anxiety meditation retreat</a></li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=23&t=161018">Legal recruitment guide</a></li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=175022">Maybe you should drop out of law school</a> (honesty!)</li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?t=235154">Fall 2014 exam strategy course </a>(out of date info about course offerings)</li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=251467">Fall 2015 exam strategy course</a> (out of date info about course offerings)</li>
                    <li><a href="http://top-law-schools.com/forums/viewtopic.php?f=3&t=260350">Spring 2016 exam strategy course</a></li>
                </ol>
            </div>
        )
    }
}

export default About;