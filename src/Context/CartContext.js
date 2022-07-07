import React, { createContext, useEffect, useMemo, useState } from "react";

import { getProductData } from '../Services/API/Api';

// Adding item to cart
const addCartItems = (cartItems, products, itemToAdd) => {
    // To check if item all ready exist
    const storeItem = products.find(
        (product) => product.id === itemToAdd.id
    );
    const itemExisting = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );


    // If is exist to change quantity
    if (itemExisting) {
        // Will not give you to add item that is out of stock
        if (storeItem.quantity === itemExisting.cartQuantity) return cartItems;

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
    storeItems: [],
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    deleteItemsToCart: () => {},
    checkoutCartItems: () => {},
});




// Provider ......

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => []);
    const [products, setProducts] = useState(() => []);

    // Update products
    const storeItems = useMemo(() => {
        return products.map((item) => {
            const newItem = { ...item };
            const cartItem = cartItems.find((item) => item.id === newItem.id);

            if (cartItem) {
                newItem.quantity -= cartItem.cartQuantity;
            }

            return newItem;
        });

    }, [cartItems, products]);

    // Get products
    const getData = async () => {
        try {
            const data = await getProductData();
            setProducts(data);
    
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, [])
    




    // Increase item quantity
    const addItemsToCart = (itemToAdd) => {
        setCartItems(addCartItems(cartItems, products, itemToAdd))
    };

    // Decrease item quantity
    const removeItemsToCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove))
    };

    // Delete item from cart
    const deleteItemsToCart = (itemToDelete) => {
        setCartItems(deleteCartItem(cartItems, itemToDelete))
    };

    // Checkout
    const checkoutCartItems = () => {
        const updateProducts = products.map((product) => {
            const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
            const newProduct = { ...product };

            if (existingCartItem) {
                newProduct.quantity -= existingCartItem.cartQuantity;
            }
            return newProduct;
        })

        setProducts(updateProducts);
        setCartItems([]);
    };


    const value = {
        cartItems,
        storeItems,
        addItemsToCart,
        removeItemsToCart,
        deleteItemsToCart,
        checkoutCartItems,
    };

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}