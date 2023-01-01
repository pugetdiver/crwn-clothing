import { createContext, useEffect, useState } from "react";


// the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    itemCount: 0,
    totalPrice: 0
});

const addCartItem = (cartItems, productToAdd) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existing) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if (existing.quantity === 1) {
        return deleteCartItem(cartItems, productToRemove);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem)
}

const deleteCartItem = (cartItems, productToDelete) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productToDelete.id);

    if (existing) {
        return cartItems.filter(cartItem => cartItem.id !== productToDelete.id);
    }

    return [...cartItems];
}

const getItemCount = (cartItems) => {
    return cartItems.reduce((accum, curItem) => accum + curItem.quantity, 0);
}

const getTotalPrice = (cartItems) => {
    return cartItems.reduce((accum, curItem) => accum + (curItem.quantity * curItem.price), 0);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setItemCount(getItemCount(cartItems))
    }, [cartItems])

    useEffect(() => {
        setTotalPrice(getTotalPrice(cartItems))
    }, [cartItems])


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }



    const value = { isCartOpen, setCartOpen, addItemToCart, removeItemFromCart, deleteItemFromCart, cartItems, itemCount, totalPrice };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}