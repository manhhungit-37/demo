import topProduct1 from "../assets/images/7.jpg";
import topProduct2 from "../assets/images/8.jpg";
import topProduct3 from "../assets/images/9.jpg";
import topProduct4 from "../assets/images/10.jpg";
import topProduct5 from "../assets/images/11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TopProduct({ children }) {
  return (
    <div className="top-product">
      {children}
      <div className="top-product-container">
        <div className="flex"> 
          <ul className="menu">
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/products">ALL BRANDS</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/vegetables">VEGETABLES</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/vegetables">FRUITS</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/drinks">JUICES</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/pet">PET FOOD</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/bread">BREAD &amp; BAKERY</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/household">CLEANING</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/products">SPICES</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/products">DRY FRUITS</a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} className="check-product-icon" />
              <a href="/products">DAIRY PRODUCTS</a>
            </li>
          </ul>
          <div className="right-product">
            <div className="flex">
              <div className="advertisement-img">
                <img src={topProduct2} alt="top-product-2" />
              </div>
              <div className="advertisement-img">
                <div className="rlt-voucher">
                  <img src={topProduct1} alt="top-product-1" />
                  <a href="#" className="ab-btn-voucher">SHOW NOW</a>
                </div>
                <div className="mg-t-15 rlt-voucher">
                  <img src={topProduct4} alt="top-product-4" />
                  <h3 className="ab-voucher">Speacial Offers</h3>
                </div>
              </div>
              <div className="advertisement-img"> 
                <div>
                  <img src={topProduct3} alt="top-product-3" />
                </div>
                <div className="mg-t-15">
                  <img src={topProduct5} alt="top-product-5" />
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