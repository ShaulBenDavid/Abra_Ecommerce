import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext';

import Button from '../../Common/Button/index';
import * as S from './style';

const ProductCard = ({ product }) => {
    const { addItemsToCart } = useContext(CartContext);

    const { image, name, price } = product;

    const handleClick = () => {
        addItemsToCart(product);
    }

    return (
        <S.ProductCardContainer>
            <img src={image} alt={name} />
            <S.ProductCardName>{name}</S.ProductCardName>
            <S.ProductCardPrice>{price} ILS</S.ProductCardPrice>
            <Button onClick={handleClick}>Add to bag</Button>
        </S.ProductCardContainer>
    );
}

export default ProductCard;