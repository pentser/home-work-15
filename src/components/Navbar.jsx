import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
    <nav className="bg-gray-200 p-4">
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="hover:text-blue-500">
          home page
        </Link>
      </li>
      <li>
        <Link to="/exercise1" className="hover:text-blue-500">
          exercise1
        </Link>
      </li>
      <li>
        <Link to="/exercise2" className="hover:text-blue-500">
        exercise2
        </Link>
      </li>
      <li>
        <Link to="/exercise3" className="hover:text-blue-500">
        exercise3
        </Link>
      </li>
    </ul>
  </nav>
    )
}

export default Navbar
