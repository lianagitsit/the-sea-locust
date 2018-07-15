import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = props => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand><Link to="/">TSL</Link></Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/course">
                    The Course
                </NavItem>
                <NavItem eventKey={3} href="/enroll">
                    Enroll
                </NavItem>
                { props.isAuthenticated ? 
                    <NavItem eventKey={4}>
                        <Link to="/admin-portal">Admin Portal</Link>
                    </NavItem> :
                    null
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;
