import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import card from "../assets/images/card.png";

export default function Footer() {
  return (
    <div className="footer-ct">
      <div className="footer">
        <div className="footer-top">
          <div className="general-ft">
            <h3>INFORMATION</h3>
            <ul>
              <li>
                <a href="/event">Events</a>
              </li>
              <li>
                <a href="/about">About US</a>
              </li>
              <li>
                <a href="/products">Best Deals</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
          </div>
          <div className="general-ft">
            <h3>POLICY INFO</h3>
            <li>
              <a href="/faqs">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
          </div>
          <div className="general-ft">
            <h3>WHAT IN STORES</h3>
            <li>
              <a href="/pet">Pet Food</a>
            </li>
            <li>
              <a href="/frozen">Frozen Snacks</a>
            </li>
            <li>
              <a href="/kitchen">Kitchen</a>
            </li>
            <li>
              <a href="products">Branded Foods</a>
            </li>
            <li>
              <a href="/household">Households</a>
            </li>
          </div>
          <div className="twitter-posts">
            <h3>TWITTER POSTS</h3>
            <li>
              <label className="twitter-label">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </label>
              <i>01 day ago</i>
              <span>Non numquam<a href="http://sd.ds/13jklf#"> http://sd.ds/13jklf# </a>eius modi tempora incidunt ut labore et <a href="http://sd.ds/1389kjklf#">http://sd.ds/1389kjklf#</a>quo nulla.</span>
            </li>
            <li>
              <label className="twitter-label">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </label>
              <i>02 day ago</i>
              <span>Con numquam<a href="http://fd.uf/56hfg#"> http://fd.uf/56hfg# </a>eius modi tempora incidunt ut labore et <a href="http://fd.uf/56hfg#">http://fd.uf/56hfg#</a>quo nulla.</span>
            </li>
              
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-cl">
            <h4>100% Secure Payments</h4>
            <img src={card} />
          </div>
          <div className="footer-cr">
            <h4>Connect With Us</h4>
            <ul className="flex">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'dribbble']} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bc">
            © 2021 Grocery Store. All rights reserved | Design by 
            <a href="#"> Hung Dep Trai</a>
          </p>
        </div>
      </div>
    </div>
  )
}