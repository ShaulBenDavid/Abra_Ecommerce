import React, { Fragment } from 'react';
import EmptyCart from '../../Components/CartComponents/EmptyCart';
import CartProductList from '../../Components/CartComponents/CartProductList/index';
import * as S from './style';


const Cart = () => {


    return (
        <S.StyledCartWrapper>
            <S.CartTitle>My cart</S.CartTitle>

            {cartProducts.length ?
                <Fragment>
                    <S.ProductCartContent>Items are reserved for 60 minutes</S.ProductCartContent>
                    <CartProductList cartProducts={cartProducts} />
                
                    <S.ProductCartTotal>
                        <span>Subtotal:</span>
                        <span>176 ILS</span>
                    </S.ProductCartTotal>
                </Fragment>
                
                :
                <EmptyCart />
            }
            
            <S.CartButton type="inverted" disabled={cartProducts.length? false : true}>Checkout</S.CartButton>

        </S.StyledCartWrapper>
    );
}

export default Cart;