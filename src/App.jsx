import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import View from './pages/View';
import Pnf from './pages/Pnf';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/* dynamic routing */}
        <Route path="/:id/view" element={<View />} />
        {/* This will show page not found for other urls */}
        <Route path="/*" element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
