import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Redux/storeSlice";

import Button from "../../Common/Button/index";
import * as S from "./style";

const ProductCard = ({ product }) => {
  const { image, name, price, id } = product;

  const dispatch = useDispatch();

  const addItemsToCart = () => {dispatch(addItemToCart(id))};


  return (
    <S.ProductCardContainer>
      <img src={image} alt={name} />
      <S.ProductCardName>{name}</S.ProductCardName>
      <S.ProductCardPrice>{price} ILS</S.ProductCardPrice>
      {product.quantity !== 0 ? (
        <Button onClick={addItemsToCart}>Add to bag</Button>
      ) : (
        <Button disabled>Out of stock</Button>
      )}
    </S.ProductCardContainer>
  );
};

export default ProductCard;
