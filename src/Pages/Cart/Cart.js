import React, { useState, Fragment } from 'react';
import EmptyCart from '../../Components/CartComponents/EmptyCart';
import CartProductList from '../../Components/CartComponents/CartProductList/index';
import * as S from './style';


const products = [
    {
        "id": 1,
        "name": "Black T-shirt",
        "price": 89,
        "image": "https://elad-test-1.s3.amazonaws.com/tshirt.png",
        "quantity": 5,
        "catagories": [
            "clothing",
            "best-seller"
        ]
    },
    {
        "id": 2,
        "name": "White Mouse Pad",
        "price": 57,
        "image": "https://elad-test-1.s3.amazonaws.com/white-pad.png",
        "quantity": 10,
        "catagories": [
            "office",
            "best-seller"
        ]
    },
    {
        "id": 3,
        "name": "White Mouse Pad",
        "price": 57,
        "image": "https://elad-test-1.s3.amazonaws.com/white-pad.png",
        "quantity": 10,
        "catagories": [
            "office",
            "best-seller"
        ]
    },
    {
        "id": 4,
        "name": "White Mouse Pad",
        "price": 57,
        "image": "https://elad-test-1.s3.amazonaws.com/white-pad.png",
        "quantity": 10,
        "catagories": [
            "office",
            "best-seller"
        ]
    },
    {
        "id": 5,
        "name": "White Mouse Pad",
        "price": 57,
        "image": "https://elad-test-1.s3.amazonaws.com/white-pad.png",
        "quantity": 10,
        "catagories": [
            "office",
            "best-seller"
        ]
    },
];

const Cart = () => {
    const [cartProducts, addCartProducts] = useState(() => products);

    console.log(cartProducts, addCartProducts);

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