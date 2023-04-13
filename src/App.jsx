import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import VistaNoticias from './components/VistaNoticias';
import Footer from './components/Footer';

const App = () => {
  return ( 
    <>
      <Header />
      <VistaNoticias />
      <Footer />
    </>
  );
}

export default App;