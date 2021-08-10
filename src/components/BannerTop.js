import BannerLeft from "./BannerLeft";
import bannerTop1 from "../assets/images/banner-top-1.jpg";
import bannerTop2 from "../assets/images/banner-top-2.jpg";
import bannerTop3 from "../assets/images/banner-top-3.jpg";

export default function BannerTop() {
  function handleMovePic() {
    
  }

  return (
    <div className="banner-top">
      <BannerLeft />
      <div className="banner-right">
        <div className="block">
          <img src={bannerTop1} alt="banner-top-1" />
          <h3 className="text-pos">MAKE YOUR<span>FOOD</span>WITH SPICY.</h3>
          <a href="#" className="btn-show">SHOP NOW</a>
        </div>
        <div className="none">
          <img src={bannerTop2} alt="banner-top-2" />
        </div>
        <div className="none">
          <img src={bannerTop3} alt="banner-top-3" />
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