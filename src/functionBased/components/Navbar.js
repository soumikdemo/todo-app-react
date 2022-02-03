import React from "react"
import { NavLink, Outlet } from "react-router-dom"

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

const Navbar = () => {
  return (
    <>
        <nav className="navBar">
            <ul>
            {links.map(link => {
                return (
                    <li key={link.id}>
                        <NavLink to={link.path} className={({isActive}) => isActive ? "active-link" : "" }> 
                            {link.text}
                        </NavLink>        
                    </li>
                )
            })}
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar