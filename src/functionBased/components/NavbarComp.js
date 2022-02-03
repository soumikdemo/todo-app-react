import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Navbar, Nav } from 'rsuite';
//import "rsuite/dist/styles/rsuite-default.css";

const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

const NavbarComp = () => {
  return (
    <>
        <nav className="navBar">
            <ul style={{ listStyleType:"none" }}>
            {links.map(link => {
                return (
                    <li key={link.id}>
                        <Nav appearance="subtle">
                            <Nav.Item href={link.path} >{link.text}</Nav.Item>
                        </Nav>
                        {/* <NavLink to={link.path} className={({isActive}) => isActive ? "active-link" : "" }> 
                            {link.text}
                        </NavLink> */}        
                    </li>
                )
            })}
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default NavbarComp