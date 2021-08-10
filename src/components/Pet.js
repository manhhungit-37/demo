import React from 'react';
import ActiveNav from './ActiveNav';
import BannerLeft from './BannerLeft';
import Commodity from "./Commodity";
import petBanner from "../assets/images/27.jpg";
import Title from './Title';

function Pet() {
  return (
    <>
      <ActiveNav active="Pet Food" />
      <div className="flex">
        <BannerLeft />
        <div className="right-pet-banner">
          <img src={petBanner} />
          <div className="absolute-pet-banner">
            <h3>Your Pet Favourite Food</h3>
            <p>Sint occaecat cupidatat non proident</p>
            <a href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
      <div className="popular-brands">
        <Commodity comm={[45, 46, 4, 47]} commContain="commodity-ctain-all" >
          <Title>Pet Food</Title>
        </Commodity>
        <Commodity comm={[48, 49, 50, 51]} commContain="commodity-ctain-all"></Commodity>
        <Commodity comm={[25, 26, 27, 28]} commContain="commodity-ctain-all" classContain="padding-bt-80"></Commodity>
      </div>
    </>
  );
}

export default Pet;