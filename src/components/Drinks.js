import React from 'react';
import ActiveNav from './ActiveNav';
import Commodity from './Commodity';
import ProductsBanner from "./ProductsBanner";
import Title from './Title';

function Drinks() {
  return (
    <>
      <ActiveNav active="Beverages" />
      <ProductsBanner bannerId={5} />
      <div className="popular-brands">
        <Commodity comm={[37, 14, 15, 16]} kindOfComm="SOFT DRINKS" commContain="commodity-ctain-all">
          <Title>Beverages</Title>
        </Commodity>
        <Commodity comm={[13, 38, 39, 40]} kindOfComm="JUICES" commContain="commodity-ctain-all"></Commodity>
        <Commodity comm={[41, 42, 43, 44]} kindOfComm="ENERGY DRINKS" classContain="padding-bt-80" commContain="commodity-ctain-all"></Commodity>
      </div>
    </>
  );
}

export default Drinks;