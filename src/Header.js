import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem className="nav"><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem className="nav"><Link to="/profile" className="nav-link">Profile</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
