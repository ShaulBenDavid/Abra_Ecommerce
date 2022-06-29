import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import PagesData from './Services/PagesData.json';
import { getProductData } from './Services/API/Api';

import PageWrapper from './Pages/PageWrapper';
import Header from './Components/Header';

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
  
  console.log(1)
  
  return (
    <div className="App">
    <Header />
      <Routes>
        {PagesData.map((page) => {
          const { pathN, pageName, pageCategorie, id } = page;
          return (
            <Route
              key={id}
              path={pathN}
              element={
                <PageWrapper
                  productsData={productsData}
                  pageName={pageName}
                  pageCategorie={pageCategorie}
                />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
