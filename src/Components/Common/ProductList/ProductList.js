import React from 'react';
import * as S from './style';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ PRODUCTS_DATA }) => {

    return (
        <S.ProductListContainer>
            {PRODUCTS_DATA.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </S.ProductListContainer>
    );
}

export default ProductList;