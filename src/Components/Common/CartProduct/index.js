import React from 'react';
import * as S from './style';
import closeIcon from '../../../Assets/closeB.svg';

const CartProduct = ({product}) => {
    const { price, name, image, quantity } = product;


    return (
        <S.ProductCartWrapper>
            <S.ImgProductCart src={image} alt={name} />
            <S.DeleteButtonProductCart src={closeIcon} alt='close button' />
            
            <S.ContentContainerProductCart>
                <S.NameProductCart>{name}</S.NameProductCart>
                <S.PriceProductCart>{price} ILS</S.PriceProductCart>

                <S.QuantityContainerProductCart>
                    
                    <S.QuantityButtonProductCart>-</S.QuantityButtonProductCart>
                    <S.QuantityProductCart>{quantity}</S.QuantityProductCart>
                    <S.QuantityButtonProductCart>+</S.QuantityButtonProductCart>

                </S.QuantityContainerProductCart>

            </S.ContentContainerProductCart>
        </S.ProductCartWrapper>
    );
}

export default CartProduct;