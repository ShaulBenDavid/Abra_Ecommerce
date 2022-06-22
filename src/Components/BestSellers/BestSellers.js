import React from 'react';
import ProductCard from '../Common/ProductCard/ProductCard';
import * as S from './style';



const BestSellers = ({ PRODUCTS_DATA }) => {
    return (
        <S.BestSellersWrapper>
            <h1>Best sellers</h1>

            <S.BestSellersCardContainer>
                {PRODUCTS_DATA.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </S.BestSellersCardContainer>
        </S.BestSellersWrapper>
    );
}

export default BestSellers;