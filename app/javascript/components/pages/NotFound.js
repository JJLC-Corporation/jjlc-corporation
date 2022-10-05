import React from 'react'
import Button from 'reactstrap'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h1>404 NOT FOUND</h1>
    <div className="notfound-button">
        <NavLink to="/dashboard">
            <Button color="danger">
                Back to Home
            </Button>
        </NavLink>
    </div>
    </>
  )
}

export default NotFound