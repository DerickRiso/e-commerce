import React from 'react';
import './styles/App.css';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Categories } from './components/categories/categories';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
