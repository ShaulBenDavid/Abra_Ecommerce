import React, { useEffect, useState } from 'react';
import BestSellers from './Pages/BestSellers/BestSellers';
import Header from './Components/Header';
import * as S from './style';

import { getProductData } from './Services/API/Api';
import Cart from './Pages/Cart/Cart';

function App() {

  const [productsData, setProductsData] = useState(() => [])

  useEffect(() => {
    
    const getData = async () => {
      try {
        const data = await getProductData();
        setProductsData(data);
  
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, [])
  
  return (
    <div className="App">
      <Header />
      <S.ContentWrapper>
        <BestSellers productsData={productsData} />
        <Cart />
      </S.ContentWrapper>
    </div>
  );
}

export default App;
