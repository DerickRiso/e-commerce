import React from 'react';
import './styles/App.css';
import { Header } from './components/header';
import { Banner } from './components/banner';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
