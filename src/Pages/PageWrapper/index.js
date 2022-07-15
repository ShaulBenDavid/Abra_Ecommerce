import React from "react";

import ContentPage from "../ContentPage";
import Cart from "../Cart";
import * as S from "./style";

const PageWrapper = ({ pageName, pageCategorie }) => {
  return (
    <S.ContentWrapper>
      <ContentPage pageName={pageName} pageCategorie={pageCategorie} />
      <Cart />
    </S.ContentWrapper>
  );
};

export default PageWrapper;
