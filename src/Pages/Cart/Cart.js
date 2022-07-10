import React, { Fragment, useMemo } from "react";

import EmptyCart from "../../Components/CartComponents/EmptyCart";
import CartProductList from "../../Components/CartComponents/CartProductList/index";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from '../../Redux/storeSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.store.cart);
  // Cart total
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, currentPrice) =>
        total + currentPrice.quantity * currentPrice.price,
      0
    );
  }, [cartItems]);

  // Handle Checkout

  const checkoutCartItems = () => {
    dispatch(checkout());
  };

  return (
    <S.StyledCartWrapper>
      <S.CartTitle>My cart</S.CartTitle>

      {cartItems.length ? (
        <Fragment>
          <S.ProductCartContent>
            Items are reserved for 60 minutes
          </S.ProductCartContent>
          <CartProductList cartProducts={cartItems} />

          <S.ProductCartTotal>
            <span>Subtotal:</span>
            <span>{cartTotal} ILS</span>
          </S.ProductCartTotal>
        </Fragment>
      ) : (
        <EmptyCart />
      )}

      <S.CartButton
        type="inverted"
        disabled={cartItems.length ? false : true}
        onClick={checkoutCartItems}
      >
        Checkout
      </S.CartButton>
    </S.StyledCartWrapper>
  );
};

export default Cart;
