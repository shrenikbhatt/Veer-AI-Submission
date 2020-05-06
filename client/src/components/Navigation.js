import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

// This is the Navbar component, where the user is able to switch between the three pages on the react app

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
      <NavbarBrand href="/" className="mr-auto">Veer AI Submission</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" style={{ color: '#FFF' }}>Input</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact/" style={{ color: '#FFF' }}>Contact</Link>
            </NavItem>
            <NavItem>
            <Link to="/data/" style={{ color: '#FFF' }}>Data</Link>
            </NavItem>
            <NavItem>
            <Link to="/list/" style={{ color: '#FFF' }}>Contact List</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

