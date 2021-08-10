import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
  const [text, setText] = useState("Search a product");

  function handleFocusInput() {
    if (text === "Search a product") {
      setText("");
    }
  }

  function handleBlurInput() {
    if (text === "") {
      setText("Search a product");
    }
  }

  return (
    <div className="header">
      <a href="#" className="offers">Today's special Offers!</a>
      <form id="search-form">
        <input type="text" className="search" placeholder={text} onChange={(e) => setText(e.target.value)} onFocus={handleFocusInput} onBlur={handleBlurInput} />
        <button type="submit" className="search-btn">
            <FontAwesomeIcon icon={['fas', 'search']} />
        </button>
      </form>
      <div>
        <button type="button" className="cart">
          View Your Cart
          <FontAwesomeIcon icon={['fas', 'shopping-cart']} className="cart-icon" />
        </button>
      </div>
      <div>
        <ul>
          <li className="user">
            <a href="#">
              <FontAwesomeIcon icon={['fas', 'user']} className="text-white" />
              <FontAwesomeIcon icon={['fas', 'caret-down']} className="text-white" />
            </a>
            <div className="header-drop-down">
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </li>
        </ul>
      </div>
      <a href="#" className="contact-link">
        Contact Us
      </a>
    </div>
  )
}