import React from 'react';
import ActiveNav from './ActiveNav';
import Commodity from './Commodity';
import Introduce from './Introduce';
import ProductsBanner from './ProductsBanner';
import Title from './Title';

function Vegetables() {
  return (
    <div>
      <ActiveNav active=" Fruits &amp; Vegetables" />
      <ProductsBanner bannerId={3} />
      <Introduce intros={[4, 5, 6]} />
      <div className="popular-brands"> 
        <Commodity comm={[29, 30, 31, 32]} commContain="commodity-ctain-all" >
          <Title>Fruits &amp; Vegetables</Title>
        </Commodity>
        <Commodity comm={[9, 10, 11, 12]} commContain="commodity-ctain-all" ></Commodity>
        <Commodity comm={[33, 34, 35, 36]} commContain="commodity-ctain-all" classContain="padding-bt-80"></Commodity>
      </div>
    </div>
  );
}

export default Vegetables;