import React from 'react';
import BestSellers from './Pages/BestSellers/BestSellers';
import Header from './Components/Header';
import * as S from './style';

import PRODUCTS_DATA from './products-data.json';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <S.ContentWrapper>
        <BestSellers PRODUCTS_DATA={PRODUCTS_DATA} />
        <Cart />
      </S.ContentWrapper>
    </div>
  );
}

export default App;
