// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-icon-container">
        <img
          className="nav-icon"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="nav-icon-name">Wave</h1>
      </div>
      <ul className="nav-item-container">
        <li className="nav-item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
