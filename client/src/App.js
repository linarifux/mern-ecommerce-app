import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './components/Mynav';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/Footer';
import ShopAll from './pages/ShopAll';
import Apparel from './pages/Apparel';
import Accessories from './pages/Accessories';
import Footwear from './pages/Footwear';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ProductDetails from './pages/productDetails/ProductDetails';
function App() {

  return (
    <>
      <Router>
        <Mynav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop-all' element={<ShopAll />} />
          <Route path='/apparel' element={<Apparel />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/footwear' element={<Footwear />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path={`/product/:productId`} element={<ProductDetails />} />
          <Route>404 Page Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
