
import React from 'react'
import { StyledButton } from '../Button/style';
import * as S from './style';

const ProductCard = ({ product }) => {

    const { image, name, price } = product;

    return (
        <S.ProductCardContainer>
            <img src={image} alt={name} />
            <S.ProductCardName>{name}</S.ProductCardName>
            <S.ProductCardPrice>{price} ILS</S.ProductCardPrice>
            <StyledButton>Add to bag</StyledButton>
        </S.ProductCardContainer>
    );
}

export default ProductCard;