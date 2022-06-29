import React from 'react';

import ContentPage from '../ContentPage/ContentPage';
import Cart from '../Cart/Cart';
import * as S from './style';


const PageWrapper = ({ productsData, pageName, pageCategorie }) => {

    
    return (
        <S.ContentWrapper>
            <ContentPage
                productsData={productsData}
                pageName={pageName}
                pageCategorie={pageCategorie}
            />
            <Cart />
        </S.ContentWrapper>
    );

}

export default PageWrapper;