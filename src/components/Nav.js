import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
        <div className="logo">
          <Link to="/">
            <span>GROCERY</span>
            <h1>STORE</h1>
          </Link>
        </div>
        <div className="nav-container">
          <ul className="nav-bar">
            <li>
              <Link to="event">Event</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="products">Best Deals</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <ul className="contact">
            <li>
              <FontAwesomeIcon icon={['fas', 'phone-alt']} className="nav-icon" />
              (+0123) 234 567
            </li>
            <li>
              <FontAwesomeIcon icon={['far', 'envelope']} className="nav-icon" />
              <Link to="#" className="email">store@grocery.com</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}