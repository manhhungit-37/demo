import './App.css';
import './assets/css/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Header from './components/Header';
import Nav from './components/Nav';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Products from"./components/Products";
import Servies from"./components/Services";
import Household from './components/Household';
import Vegetables from './components/Vegetables';
import Kitchen from './components/Kitchen';
import Drinks from './components/Drinks';
import Pet from './components/Pet';
import Frozen from './components/Frozen';
import Bread from './components/Bread';
import Faq from './components/Faq';
import ErrorPage from "./components/ErrorPage";

library.add(fas, fab, far);

function App() {
  return (
    <div className="page">
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/event" component={Events} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/services" component={Servies} />
            <Route path="/household" component={Household} />
            <Route path="/vegetables" component={Vegetables} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/pet" component={Pet} />
            <Route path="/frozen" component={Frozen} />
            <Route path="/bread" component={Bread} />
            <Route path="/faqs" component={Faq} />
            <Route path="/:somestring" component={ErrorPage} /> 
          </Switch>
          <Subscribe />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
