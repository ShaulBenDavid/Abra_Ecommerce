import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PagesData from "./Services/PagesData.json";

import PageWrapper from "./Pages/PageWrapper";
import Header from "./Components/Header";
import { fetchStoreItems } from "./Redux/storeSlice";

function App() {
  const dispacth = useDispatch();
  const items = useSelector((state) => state.store.items);

  useEffect(() => {
    if (items.length === 0) {
      dispacth(fetchStoreItems());
    }
  }, []);

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
                  pageName={pageName}
                  pageCategorie={pageCategorie}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
