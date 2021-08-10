import React from 'react';
import ActiveNav from './ActiveNav';
import BannerLeft from './BannerLeft';
import Commodity from './Commodity';
import Introduce from './Introduce';
import NavPopularCate from './NavPopularCate';
import ProductsBanner from './ProductsBanner';
import Title from './Title';

function Kitchen() {
  return (
    <div>
      <ActiveNav active="Kitchen" />
      <ProductsBanner bannerId={4} />
      <Introduce intros={[1,6,3]} />
      <div className="popular-brands">
        <NavPopularCate />
      </div>
      <Commodity comm={[1, 3, 2, 4]} commContain="commodity-ctain" classContain="padding-bt-80">
        <Title>Popular Products</Title>
      </Commodity>
    </div>
  );
}

export default Kitchen;