import "./nav.css"

export default function Nav() {
  return (
    <div className="nav">
        <div className="logo">
          <a href="#">
            <span>GROCERY</span>
            <h1>STORE</h1>
          </a>
        </div>
        <div className="nav-container">
          <ul className="nav-bar">
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Best Deals</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <ul className="contact">
            <li>
              <i className="fas fa-phone-alt"></i>
              (+0123) 234 567
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <a href="#" className="email">store@grocery.com</a>
            </li>
          </ul>
        </div>
    </div>
  )
}