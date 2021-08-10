import BannerBottom from "./BannerBottom";
import BannerTop from "./BannerTop";
import Commodity from "./Commodity";
import Title from "./Title";
import TopProduct from "./TopProduct";

export default function Home() {
  return (
    <>
      <BannerTop />
      <BannerBottom />
      <Commodity comm={[1, 2, 3, 4]} classContain="commodity" commContain="commodity-ctain">
        <Title>Hot Offers</Title>
      </Commodity>
      <TopProduct>
        <Title>Top Products</Title>
      </TopProduct>
    </>
  )
}