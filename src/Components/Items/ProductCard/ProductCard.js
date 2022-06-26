
import React from 'react'
import Button from '../../Common/Button/index';
import * as S from './style';

const ProductCard = ({ product }) => {

    const { image, name, price } = product;

    return (
        <S.ProductCardContainer>
            <img src={image} alt={name} />
            <S.ProductCardName>{name}</S.ProductCardName>
            <S.ProductCardPrice>{price} ILS</S.ProductCardPrice>
            <Button>Add to bag</Button>
        </S.ProductCardContainer>
    );
}

export default ProductCard;