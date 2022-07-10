import React from "react";

import * as S from "./style";
import closeIcon from "../../../Assets/closeB.svg";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Redux/storeSlice";

const CartProduct = ({ product }) => {
  const { price, name, image, quantity, id } = product;

  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addItemToCart(id));

  const removeItemsToCart = () => {};

  const deleteItemsToCart = () => {};

  return (
    <S.ProductCartWrapper>
      <S.ImgProductCart src={image} alt={name} />
      <S.DeleteButtonProductCart
        src={closeIcon}
        alt="close button"
        onClick={deleteItemsToCart}
      />

      <S.ContentContainerProductCart>
        <S.NameProductCart>{name}</S.NameProductCart>
        <S.PriceProductCart>{price} ILS</S.PriceProductCart>

        <S.QuantityContainerProductCart>
          <S.QuantityButtonProductCart onClick={removeItemsToCart}>
            -
          </S.QuantityButtonProductCart>

          <S.QuantityProductCart>{quantity}</S.QuantityProductCart>

          <S.QuantityButtonProductCart onClick={handleAdd}>
            +
          </S.QuantityButtonProductCart>
        </S.QuantityContainerProductCart>
      </S.ContentContainerProductCart>
    </S.ProductCartWrapper>
  );
};

export default CartProduct;
