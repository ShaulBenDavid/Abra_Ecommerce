import React from 'react';
import ProductList from '../../Components/Common/ProductList/ProductList';
import * as S from './style';



const BestSellers = ({ PRODUCTS_DATA }) => {
    return (
        <S.BestSellersWrapper>
            <h1>Best sellers</h1>

            <ProductList PRODUCTS_DATA={PRODUCTS_DATA} />
        </S.BestSellersWrapper>
    );
}

export default BestSellers;