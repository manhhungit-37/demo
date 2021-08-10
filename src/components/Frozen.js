import React from 'react';
import ActiveNav from './ActiveNav';
import Commodity from './Commodity';
import Introduce from './Introduce';
import ProductsBanner from './ProductsBanner';
import Title from './Title';

function Frozen() {
  return (
    <>
      <ActiveNav active="Frozen Food" />
      <ProductsBanner bannerId={8} />
      <Introduce intros={[7, 8, 9]} />
      <div className="popular-brands">
        <Commodity comm={[52, 53, 54, 55]} commContain="commodity-ctain-all">
          <Title>Frozen Food</Title>
        </Commodity>
        <Commodity comm={[56, 57, 58, 59]} commContain="commodity-ctain-all"></Commodity>
        <Commodity comm={[60, 61, 62, 63]} commContain="commodity-ctain-all" classContain="padding-bt-80"></Commodity>
      </div>
    </>
  );
}

export default Frozen;