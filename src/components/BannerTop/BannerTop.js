import { useState } from "react";
import "./bannertop.css";

export default function BannerTop() {
  const [banner, setBanner] = useState(1);

  function handleMovePic() {
    
  }

  return (
    <div className="banner-top">
      <div className="banner-left-nav">
        <ul>
          <li>
            <a href="#">Branded Foods</a>
          </li>
          <li>
            <a href="#">HouseHolds</a>
          </li>
          <li>
            <a href="#">
              Veggies &amp; Fruits
              <i className="fas fa-caret-down"></i>
            </a>
          </li>
          <li>
            <a href="#">Kitchen</a>
          </li>
          <li>
            <a href="#">Short Codes</a>
          </li>
          <li>
            <a href="#">
              Beverages
              <i className="fas fa-caret-down"></i>
            </a>
          </li>
          <li>
            <a href="#">Pet Food</a>
          </li>
          <li>
            <a href="#">
              Frozen Foods
              <i className="fas fa-caret-down"></i>
            </a>
          </li>
          <li>
            <a href="#">Bread &amp; Bakery</a>
          </li>
        </ul>
      </div>
      <div className="banner-right">
        <div className="block">
          <img src="./images/1.jpg" />
          <h3 className="text-pos">MAKE YOUR<span>FOOD</span>WITH SPICY.</h3>
          <a href="#" className="btn-show">SHOP NOW</a>
        </div>
        <div className="none">
          <img src="./images/2.jpg" />
        </div>
        <div className="none">
          <img src="./images/3.jpg" />
        </div>
        <div className="dott">
          <span onClick={handleMovePic}>1</span>
          <span onClick={handleMovePic}>2</span>
          <span onClick={handleMovePic}>3</span>
        </div>
      </div>
    </div>
  )
}