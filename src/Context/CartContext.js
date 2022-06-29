import React, { createContext, useState } from "react";

// Adding item to cart
const addCartItems = (cartItems, itemToAdd) => {
    // To check if item all ready exist
    const itemExisting = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );


    // If is exist to change quantity
    if (itemExisting) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
                : cartItem
        )
    }



    // Default when the cart empty
    return [...cartItems, { ...itemToAdd, cartQuantity: 1 }];
}


export const CartContext = createContext({
    cartItems: [],
    addItemsToCart: () => {},

});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => []);

    const addItemsToCart = (itemToAdd) => {
        setCartItems(addCartItems(cartItems, itemToAdd))
    };


    const value = { cartItems, addItemsToCart };

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}