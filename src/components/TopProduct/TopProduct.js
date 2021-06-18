import Title from '../Title/Title'
import './topproduct.css'

export default function TopProduct() {
  return (
    <div className="top-product">
      <div className="top-product-container">
        <Title>Top Products</Title>
        <div className="top-content"> 
          <ul className="menu">
            <li>
              <i className="fas fa-check"></i>
              <a href="#">ALL BRANDS</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">VEGETABLES</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">FRUITS</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">JUICES</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">PET FOOD</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">BREAD &amp; BAKERY</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">CLEANING</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">SPICES</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">DRY FRUITS</a>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a href="#">DAIRY PRODUCTS</a>
            </li>
          </ul>
          <div className="right-product">
            <div className="top-img">
              <div className="advertisement-img">
                <img src="./images/8.jpg" />
              </div>
              <div className="advertisement-img">
                <div className="rlt-voucher">
                  <img src="./images/7.jpg" />
                  <a href="#" className="ab-btn-voucher">SHOW NOW</a>
                </div>
                <div className="mg-t-15 rlt-voucher">
                  <img src="./images/10.jpg" />
                  <h3 className="ab-voucher">Speacial Offers</h3>
                </div>
              </div>
              <div className="advertisement-img"> 
                <div>
                  <img src="./images/9.jpg" />
                </div>
                <div className="mg-t-15">
                  <img src="./images/11.jpg" />
                </div>
              </div>
            </div>
            <div className="voucher-ct">
              <div className="voucher-text">
                Get <span>25% Off</span> On First Order And Also Get Gift Voucher
              </div>
              <span className="voucher-img"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}