import { useEffect, useState } from "react";
import BannerLeft from "./BannerLeft";

export default function ProductsBanner({ bannerId }) {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    let isUnmount = false;

    fetch(`http://hung-json-server.herokuapp.com/api/banner/${bannerId}`)
    .then(res => res.json())
    .then(res => {
      if (!isUnmount) {
        setBanner(res.data)
      }
    })

    return () => {
      isUnmount = true;
    }
  }, []);

  return (
    <div className="flex">
      <BannerLeft />
      <div className="relative width-80">
        {Object.keys(banner).length > 0 &&  (<img src={banner.img} alt="banner" className="banner-deals-img" />)}
        <h3 className="ab-best-deals">
          Best Deals For New Products
          <span></span>
        </h3>
      </div>
    </div>
  )
}