import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BannerLeft() {
  return (
    <div className="banner-left-nav">
      <ul>
        <li>
          <Link to="/products">Branded Foods</Link>
        </li>
        <li>
          <Link to="/household">HouseHolds</Link>
        </li>
        <li className="top-vf">
          <Link to="/vegetables">
            Veggies &amp; Fruits 
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </Link>
          <div className="banner-top-dropdown">
            <Link to="/vegetables">Vegetables</Link>
            <Link to="/vegetables">Fruits</Link>
          </div>
        </li>
        <li>
          <Link to="/kitchen">Kitchen</Link>
        </li>
        <li className="top-vf">
          <Link to="/drinks">
            Beverages
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </Link>
          <div className="banner-top-dropdown">
            <Link to="/drinks">Soft Drinks</Link>
            <Link to="/drinks">Juices</Link>
          </div>
        </li>
        <li>
          <Link to="/pet">Pet Food</Link>
        </li>
        <li className="top-vf">
          <Link to="/frozen">
            Frozen Foods
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </Link>
          <div className="banner-top-dropdown">
            <Link to="/frozen">Frozen Snacks</Link>
            <Link to="/frozen">Frozen Nonveg</Link>
          </div>
        </li>
        <li>
          <Link to="/bread">Bread &amp; Bakery</Link>
        </li>
      </ul>
    </div>
  )
}