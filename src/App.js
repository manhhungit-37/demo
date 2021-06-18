import './App.css';
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import BannerBottom from './components/BannerBottom/BannerBottom';
import TopProduct from './components/TopProduct/TopProduct';
import BannerTop from './components/BannerTop/BannerTop';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Commodity from './components/Commodity/Commodity';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <BannerTop />
      <BannerBottom />
      <Title>Hot Offers</Title>
      <Commodity />
      <TopProduct />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
