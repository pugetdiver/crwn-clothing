import { createContext, useEffect, useState } from "react";


// the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    itemCount: 0
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

const getItemCount = (cartItems) => {
    console.log(cartItems);
    return cartItems.reduce((accum, curItem) => accum + curItem.quantity, 0);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        setItemCount(getItemCount(cartItems))
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }



    const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, itemCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}