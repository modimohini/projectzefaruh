import React from "react"
import { Navbar, NavItem, } from 'react-materialize'
import { Link } from "react-router-dom"

function Nav() {
    return (

        <Navbar brand={<a />} alignLinks="right" className="blue "sidenav={<li />}>
            

            <Link
          to="/myaccount"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
            <NavItem href="">
              My Account
            </NavItem>
       
        </Link>
            <NavItem href="components.html">
               Saved Events
        </NavItem>
        </Navbar>


    )

}

export default Nav