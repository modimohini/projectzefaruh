import React from "react"
import { Navbar, NavItem, } from 'react-materialize'

function Nav() {
    return (

        <Navbar brand={<a />} alignLinks="right" sidenav={<li />}>
            <NavItem href="">
                My Events
        </NavItem>
            <NavItem href="components.html">
               Saved Events
        </NavItem>
        </Navbar>


    )

}

export default Nav