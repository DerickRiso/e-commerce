import React from 'react';
import './styles/App.css';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Categories } from './components/categories/categories';
import { Products } from './components/products/products';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';
import { ShopNav } from './components/shop-nav/shopNav';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Products title={"Our Products"} showTitle={true}/>
      <ShopNav pages={false} button={true}/>
      <Features />
      <Footer />
    </div>
  );
}

export default App;
