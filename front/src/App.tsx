import './styles/App.css';
import Header from './components/header';
import Banner from './components/banner';
import Categories from './components/categories';
import Products from './components/products';
import Features from './components/features';
import Footer from './components/footer';
import ShopNav from './components/shop-nav';

const allApi = "products";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      {/* <Products 
        title={'Our Products'} 
        showTitle={true} 
        limit={8} 
        path={allApi}
        pagination={false}
        order="default"
        show={'8'}
        cat={'all'}
      /> */}
      <ShopNav pages={false} button={true}/>
      <Features />
      <Footer />
    </div>
  );
}

export default App;
