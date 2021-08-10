import { useEffect, useState } from 'react';
import Commodity from './Commodity';
import Title from './Title';

export default function PopularBrands() {
  return (
    <div className="popular-brands">
      <Commodity comm={[5, 6, 7, 8]} kindOfComm="FOOD" commContain="commodity-ctain-all">
        <Title>Popular Brands</Title>
      </Commodity>
      <Commodity comm={[9, 10, 11, 12]} kindOfComm="VEGETABLES &amp; FRUITS" commContain="commodity-ctain-all" />
      <Commodity comm={[13, 14, 15, 16]} kindOfComm="BEVERAGES" classContain="padding-bt-80" commContain="commodity-ctain-all" />
    </div>
  )
}