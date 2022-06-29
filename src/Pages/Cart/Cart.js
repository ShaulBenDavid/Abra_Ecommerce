import React, { Fragment, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import EmptyCart from '../../Components/CartComponents/EmptyCart';
import CartProductList from '../../Components/CartComponents/CartProductList/index';
import * as S from './style';


const Cart = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <S.StyledCartWrapper>
            <S.CartTitle>My cart</S.CartTitle>

            {cartItems.length ?
                <Fragment>
                    <S.ProductCartContent>Items are reserved for 60 minutes</S.ProductCartContent>
                    <CartProductList cartProducts={cartItems} />
                
                    <S.ProductCartTotal>
                        <span>Subtotal:</span>
                        <span>{cartTotal} ILS</span>
                    </S.ProductCartTotal>
                </Fragment>
                
                :
                <EmptyCart />
            }
            
            <S.CartButton type="inverted" disabled={cartItems.length? false : true}>Checkout</S.CartButton>

        </S.StyledCartWrapper>
    );
}

export default Cart;