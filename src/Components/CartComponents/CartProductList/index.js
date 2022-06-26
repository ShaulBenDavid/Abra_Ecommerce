import React from 'react';
import * as S from './style';
import CartProduct from '../CartProduct';

const CartProductList = ({ cartProducts }) => {

    return (
        <S.ProductCartListWrapper>
            <S.CartProductContainer>
                {cartProducts.map((product) => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </S.CartProductContainer>
        </S.ProductCartListWrapper>
    );
}

export default CartProductList;