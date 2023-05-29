import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUser, FaBell } from 'react-icons/fa';
import '../App.css';

export const TopBar = () => {
  return (
    <Navbar expand="lg" className="top-bar">
      <Navbar.Toggle aria-controls="top-bar-nav" />
      <Navbar.Collapse id="top-bar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Admin" id="admin-dropdown">
            <NavDropdown.Item href="#profile">
              <FaUser className="mr-2" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#notifications">
            <FaBell />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
