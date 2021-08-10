import { useState } from "react";

export default function Subscribe() {
  const [text, setText] = useState("Email");

  function handleFocusEmail() {
    if (text === "Email") {
      setText("");
    }
  }

  function handleBlurEmail() {
    if (text === "") {
      setText("Email");
    }
  }

  return (
    <div className="subscribe-ct">
      <div className="subscribe">
          <h3>Sign Up For Our Newsletter</h3>
        <form>
          <input type="email" placeholder={text} onChange={(e) => setText(e.target.value)} onFocus={handleFocusEmail} onBlur={handleBlurEmail} className="email-input" />
          <button type="submit" className="subscribe-email">SUBSCRIBE NOW</button>
        </form>
      </div>
    </div>
  )
}