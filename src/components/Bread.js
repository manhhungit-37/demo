import React from 'react';
import ActiveNav from './ActiveNav';
import Commodity from './Commodity';
import ProductsBanner from './ProductsBanner';
import Title from './Title';

function Bread() {
  return (
    <>
      <ActiveNav active="Bread &amp; Bakery" />
      <ProductsBanner bannerId={6} /> 
      <div className="popular-brands">
        <Commodity comm={[64, 65, 66, 67]} commContain="commodity-ctain-all">
          <Title>Bread &amp; Bakery</Title>
        </Commodity>
        <Commodity comm={[68, 69, 70, 71]} commContain="commodity-ctain-all"></Commodity>
        <Commodity comm={[72, 73, 74, 75]} commContain="commodity-ctain-all" classContain="padding-bt-80"></Commodity>
      </div>
    </>
  );
}

export default Bread;