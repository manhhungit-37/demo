import bannerBt1 from "../assets/images/banner-bt-1.jpg";
import bannerBt2 from "../assets/images/banner-bt-2.jpg";
import bannerBt3 from "../assets/images/banner-bt-3.jpg";


export default function BannerBottom() {
  return (
    <div className="banner-container">
      <div className="relative">
        <img src={bannerBt1} alt="banner-bt-1" />
        <div className="ab-banner1">
          <h1>Discount Offer</h1>
          <span>25%</span>
        </div>
      </div>
      <div className="relative">
        <img src={bannerBt2} alt="banner-bt-2" />
        <div className="ab-banner2">
          Introducing
          <h3>Best Store</h3>
          For
          <span>GROCERIES</span>
        </div>
      </div>
      <div className="relative">
        <img src={bannerBt3} alt="banner-bt-3" />
        <div className="ab-banner3">
          Save
          <h3>UPTO</h3>
          $10
        </div>
      </div>
    </div>
  )
}