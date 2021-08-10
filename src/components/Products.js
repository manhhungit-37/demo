import ActiveNav from "./ActiveNav";
import Introduce from "./Introduce";
import PopularBrands from "./PopularBrands";
import ProductsBanner from './ProductsBanner';

export default function Products() {
  return (
    <>
      <ActiveNav active="Branded Food" />
      <ProductsBanner bannerId={1} />
      <Introduce intros={[1, 2, 3]} />
      <PopularBrands />
    </>
  )
}