import React from 'react';
import BestSellers from './Pages/BestSellers/BestSellers';
import Header from './Components/Header';

import PRODUCTS_DATA from './products-data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <BestSellers PRODUCTS_DATA={PRODUCTS_DATA} />
    </div>
  );
}

export default App;
