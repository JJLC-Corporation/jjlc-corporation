import React from "react"
import { Nav, NavItem, Button} from "reactstrap"
import { NavLink } from "react-router-dom"
// import "./navbar.css"


const Navigation = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
}) => {
    return (
    <>
        <div className="logged-in-navbar">
            <Nav>
            {logged_in && (
                <NavItem>
                    <NavLink to="/dashboard" className="nav-link">
                        <Button>Home</Button>
                    </NavLink>
                </NavItem>
                )}
            {logged_in && (
                <NavItem>
                <a href={sign_out_route} className="nav-link">
                    <Button>Sign Out</Button>
                </a>
                </NavItem>
            )}
            {logged_in && (
                <NavItem>
                    <NavLink to="/workoutindex" className="nav-link">
                        <Button>All Workouts</Button>
                    </NavLink>
                </NavItem>
            )}
            {logged_in && (
                <NavItem>
                    <NavLink to="/workoutnew" className="nav-link">
                        <Button>Add Workout</Button>
                    </NavLink>
                </NavItem>
            )}
            {logged_in && (
                <NavItem>
                    <NavLink to="/resources" className="nav-link">
                        <Button>Resources</Button>
                    </NavLink>
                </NavItem>
            )}
            </Nav>
        </div>
        <div className="logged-out-navbar">
            <Nav>
            {!logged_in && (
                <NavItem>
                    <NavLink to="/" className="nav-link">
                        <Button>Home</Button>
                    </NavLink>
                </NavItem>
                )}
            {!logged_in && (
                <NavItem>
                <a href={sign_in_route} className="nav-link">
                    <Button>Sign In</Button>
                </a>
                </NavItem>
            )}
            {!logged_in && (
                <NavItem>
                <a href={new_user_route} className="nav-link">
                    <Button>Sign Up</Button>
                </a>
                </NavItem>
            )}
            {!logged_in && (
                <NavItem>
                    <NavLink to="/aboutus" className="nav-link">
                        <Button>About Us</Button>
                    </NavLink>
                </NavItem>
            )}
            {!logged_in && (
                <NavItem>
                    <NavLink to="/resources" className="nav-link">
                        <Button>Resources</Button>
                    </NavLink>
                </NavItem>
            )}
            </Nav>
        </div>
    </>
    )
}

export default Navigation
