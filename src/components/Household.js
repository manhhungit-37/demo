import React from 'react';
import ActiveNav from './ActiveNav';
import BannerLeft from './BannerLeft';
import Commodity from './Commodity';
import ProductsBanner from './ProductsBanner';
import Title from './Title';

function Household() {
  return (
    <div>
      <ActiveNav active="Households" />
      <ProductsBanner bannerId={2} />
      <div className="popular-brands">
        <Commodity comm={[17, 18, 19, 20]} kindOfComm="CLEANING" classContain="padding-t-80" commContain="commodity-ctain-all" >
          <Title>Household Products</Title>
        </Commodity>
        <Commodity comm={[21, 22, 23, 24]} kindOfComm="UTENSILS"  commContain="commodity-ctain-all" ></Commodity>
        <Commodity comm={[25, 26, 27, 28]} kindOfComm="PET FOOD" classContain="padding-bt-80"  commContain="commodity-ctain-all"></Commodity>
      </div>
    </div>
  );
}

export default Household;