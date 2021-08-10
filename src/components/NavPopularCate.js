import React from 'react';
import category1 from "../assets/images/22.jpg";
import category2 from "../assets/images/23.jpg";
import category3 from "../assets/images/24.jpg";

function NavPopularCate() {
  return (
    <div className="padding-bt-80">
      <h2 className="cate-grid-title">POPULAR CATEGORIES</h2>
        <div className="popular-cate-grid">
          <div className="cate-grid-element">
            <img src={category1} />
            <h3>Bread &amp; Bakery</h3>
            <ul>
              <li>
                <a href="#">Raising rolls</a>
              </li>
              <li>
                <a href="#">Butter Croissants</a>
              </li>
              <li>
                <a href="#">wheat pita</a>
              </li>
              <li>
                <a href="#">Hot dog roll</a>
              </li>
            </ul>
          </div>
          <div className="cate-grid-element">
            <img src={category2} />
            <h3>Beverages</h3>
            <ul>
              <li>
                <a href="#">Juices</a>
              </li>
              <li>
                <a href="#">Soft Drinks</a>
              </li>
              <li>
                <a href="#">Energy Drinks</a>
              </li>
            </ul>
          </div>
          <div className="cate-grid-element">
            <img src={category3} />
            <h3>Frozen Foods</h3>
            <ul>
              <li>
                <a href="#">Frozen Snacks</a>
              </li>
              <li>
                <a href="#">Frozen Nonveg</a>
              </li>
              <li>
                <a href="#">Frozen Sweet Corn</a>
              </li>
              <li>
                <a href="#">Frozen Mixed Vegetable</a>
              </li>
            </ul>
          </div>
          
        </div>
    </div>
  );
}

export default NavPopularCate;