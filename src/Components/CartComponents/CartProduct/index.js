import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

import * as S from "./style";
import closeIcon from "../../../Assets/closeB.svg";

const CartProduct = ({ product }) => {
  const { addItemsToCart, removeItemsToCart, deleteItemsToCart } =
    useContext(CartContext);

  const { price, name, image, cartQuantity } = product;

  const increaseItemQuantity = () => {
    addItemsToCart(product);
  };

  const decreaseItemQuantity = () => {
    removeItemsToCart(product);
  };

  const deleteItemFromCart = () => {
    deleteItemsToCart(product);
  };

  return (
    <S.ProductCartWrapper>
      <S.ImgProductCart src={image} alt={name} />
      <S.DeleteButtonProductCart
        src={closeIcon}
        alt="close button"
        onClick={deleteItemFromCart}
      />

      <S.ContentContainerProductCart>
        <S.NameProductCart>{name}</S.NameProductCart>
        <S.PriceProductCart>{price} ILS</S.PriceProductCart>

        <S.QuantityContainerProductCart>
          <S.QuantityButtonProductCart onClick={decreaseItemQuantity}>
            -
          </S.QuantityButtonProductCart>

          <S.QuantityProductCart>{cartQuantity}</S.QuantityProductCart>

          <S.QuantityButtonProductCart onClick={increaseItemQuantity}>
            +
          </S.QuantityButtonProductCart>
        </S.QuantityContainerProductCart>
      </S.ContentContainerProductCart>
    </S.ProductCartWrapper>
  );
};

export default CartProduct;
