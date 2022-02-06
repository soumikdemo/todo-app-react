import {React, useState} from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Nav } from 'rsuite';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

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

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () =>{
    setNavbarOpen(!navbarOpen);
  }

  const closeMenu = () =>{
    setNavbarOpen(false);
  }

  return (
    <>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <Nav appearance="subtle">
          {links.map(link => {
              return (
                <li key={link.id}>
                  {/* <Nav.Item href={link.path} >{link.text}</Nav.Item> */}
                  <NavLink  to={link.path}
                            onClick={() => closeMenu()}
                            className={({isActive}) => isActive ? "active-link" : "" }> 
                      {link.text}
                  </NavLink>        
                </li>
              )
          })}
          </Nav>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavbarComp