import React, { createContext, useEffect, useState } from "react";

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

// removeItem from cart

const removeCartItem = (cartItems, itemToRemove) => {
    const itemExisting = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );


    if (itemExisting.cartQuantity === 1) {
        return cartItems.filter((cartItem) =>
        cartItem.id !== itemToRemove.id
        )   
    }

    return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
        : cartItem
    )   

}

// Delete item from cart
const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter((cartItem) =>
    cartItem.id !== itemToDelete.id
    )   
}


export const CartContext = createContext({
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    deleteItemsToCart: () => { },
    cartTotal: 0,

});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => []);
    const [cartTotal, setCartTotal] = useState(() => 0);

    useEffect(() => {
        const cartTotalCalc = cartItems.reduce((total, currentPrice) => total + currentPrice.cartQuantity * currentPrice.price, 0);
        setCartTotal(cartTotalCalc);
    }, [cartItems])

    // Increase item quantity
    const addItemsToCart = (itemToAdd) => {
        setCartItems(addCartItems(cartItems, itemToAdd))
    };

    // Decrease item quantity
    const removeItemsToCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove))
    };

    // Delete item from cart
    const deleteItemsToCart = (itemToDelete) => {
        setCartItems(deleteCartItem(cartItems, itemToDelete))
    };


    const value = {
        cartItems,
        cartTotal,
        addItemsToCart,
        removeItemsToCart,
        deleteItemsToCart,
    };

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}