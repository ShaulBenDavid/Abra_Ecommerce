import React from 'react';
import * as S from './style';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ productsData }) => {

    return (
        <S.ProductListContainer>
            {productsData.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </S.ProductListContainer>
    );
}

export default ProductList;