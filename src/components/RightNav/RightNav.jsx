import React from "react"
import { NavLink } from 'react-router-dom'
import "./style.css"

function RightNav() {
  return (
    <div className="nav nav-tabs">
      <div className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="projectspage"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Project
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </NavLink>
      </div>
    </div>
  );
}
export default RightNav;
