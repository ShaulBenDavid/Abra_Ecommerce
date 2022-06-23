import React from 'react';
import EmptyCart from '../../Assets/empty-cart.svg';
import * as S from './style';

const Cart = () => {
    return (
        <S.StyledCartWrapper>
            <S.CartTitle>My cart</S.CartTitle>

            <S.EmptyCartContainer>
                <S.EmptyCartImg src={EmptyCart} alt='empty cart' />
                <S.EmptyCartText>Your cart is empty</S.EmptyCartText>
            </S.EmptyCartContainer>
            
            <S.CartButton disabled>Checkout</S.CartButton>

        </S.StyledCartWrapper>
    );
}

export default Cart;