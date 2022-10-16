import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {!logged_in && (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="me-auto">
              <span className="lift-title">
                <i>.LIFT</i>
              </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavLink href={sign_in_route} className="nav-link">
                  Login
                </NavLink>
                <NavLink href={new_user_route} className="nav-link">
                  Sign Up
                </NavLink>
                <NavLink href="/resources" className="nav-link">
                  Workout Resources
                </NavLink>
                <NavLink href="/aboutus" className="nav-link">
                  Meet The Team
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
      {logged_in && (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/dashboard" className="me-auto">
              <span className="lift-title">
                <i>.LIFT</i>
              </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavLink href="/workoutindex" className="nav-link">
                  Workout Plan
                </NavLink>
                <NavLink href="/workoutnew" className="nav-link">
                  Add a New Workout
                </NavLink>
                <NavLink href="/resources" className="nav-link">
                  Workout Resources
                </NavLink>
                <NavLink href={sign_out_route} className="nav-link">
                  Log Out
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Navigation;
