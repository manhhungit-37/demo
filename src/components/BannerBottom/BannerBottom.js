import './banner.css'

export default function BannerBottom() {
  return (
    <div className="banner-container">
      <div className="relative">
        <img src="./images/4.jpg" />
        <div className="ab-banner1">
          <h1>Discount Offer</h1>
          <span>25%</span>
        </div>
      </div>
      <div className="relative">
        <img src="./images/5.jpg" />
        <div className="ab-banner2">
          Introducing
          <h3>Best Store</h3>
          For
          <span>GROCERIES</span>
        </div>
      </div>
      <div className="relative">
        <img src="./images/6.jpg" />
        <div className="ab-banner3">
          Save
          <h3>UPTO</h3>
          $10
        </div>
      </div>
    </div>
  )
}