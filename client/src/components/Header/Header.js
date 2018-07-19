import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Jumbotron } from "react-bootstrap";
import "./Header.css";

const Header = props => (
    <div>
        <Navbar fixedTop collapseOnSelect className="navbar">
            <Navbar.Header>
                <Navbar.Brand className="navitem"><Link to="/">TSL</Link></Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem className="navitem" eventKey={1} href="/">
                        Home
                    </NavItem>
                    <NavDropdown className="navitem" eventKey={2} title="The Course">
                        <MenuItem eventKey={2.1} href="/#background">Background</MenuItem>
                        <MenuItem eventKey={2.2} href="/course">The Course</MenuItem>
                        <MenuItem eventKey={2.3} href="/cost">Cost</MenuItem>
                    </NavDropdown>
                    <NavItem className="navitem" eventKey={3} href="/testimonials">Testimonials</NavItem>
                    <NavItem className="navitem" eventKey={4} href="/FAQ">FAQ</NavItem>
                    <NavDropdown className="navitem" eventKey={5} title="About Me">
                        <MenuItem eventKey={5.1} href="/about">About</MenuItem>
                        <MenuItem eventKey={5.2} href="/about#writing">Guides & Writings</MenuItem>
                        <MenuItem eventKey={5.3} href="/about#contact">Contact</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                        <Button className="enroll-btn" bsStyle="success" href="/enroll">Enroll</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="jumbotron container">
            <img src="http://www.thesealocust.com/wp/wp-content/uploads/2016/07/Website.Header.Photo_.Centered.png" alt="" />
        </Jumbotron>
    </div>
);

export default Header;
