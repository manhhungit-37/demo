import { useState } from "react";
import "./header.css"

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
            <i className="fas fa-search"></i>
        </button>
      </form>
      <div>
        <button type="button" className="cart">
          View Your Cart
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <div>
        <ul>
          <li className="user">
            <a href="#">
              <i className="fas fa-user text-white"></i>
              <i className="fas fa-caret-down text-white"></i>
            </a>
            <div className="drop-down">
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