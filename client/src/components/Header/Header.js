import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from "react-bootstrap";

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
                <NavDropdown eventKey={2} title="The Course">
                    <MenuItem eventKey={2.1} href="/background">Background</MenuItem>
                    <MenuItem eventKey={2.2} href="/course">The Course</MenuItem>
                    <MenuItem eventKey={2.3} href="/cost">Cost</MenuItem>
                </NavDropdown>
                <NavItem eventKey={3} href="/FAQ">FAQ</NavItem>
                <NavDropdown eventKey={4} title="About Me">
                    <MenuItem eventKey={4.2} href="/about">About</MenuItem>
                    <MenuItem eventKey={4.1} href="/about#writing">Guides & Writings</MenuItem>
                </NavDropdown>
                <Button bsStyle="success" href="/enroll">Enroll</Button>
                {props.isAuthenticated ?
                    <NavItem eventKey={5}>
                        <Link to="/admin-portal">Admin Portal</Link>
                    </NavItem> :
                    null
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;
