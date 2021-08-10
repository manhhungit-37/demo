import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActiveNav({ active }) {
  return (
    <div className="active-nav">
      <div className="active-nav-ct">
        <ul className="flex-active-nav">
          <li>
            <FontAwesomeIcon icon="home" className="home-icon" />
            <a href="/" className="home-link-active">Home</a>
            <span>|</span>
          </li>
          <li>{active}</li>
        </ul>        
      </div>
    </div>
  )
}