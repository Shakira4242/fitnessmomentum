import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component{
    render(){
      return (
        <Navbar color="dark" dark expand="md">
          <Nav navbar>
            <NavItem>
              <NavLink href="/timeline">Timeline</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/live">Live</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
}

export default Header;