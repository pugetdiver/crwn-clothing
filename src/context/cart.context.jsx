import { createContext, useState } from "react";


// the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => { }
});


const addCartItem = (cartItems, productToAdd) => {
    const existing = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existing) {
        existing.quantity++;
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    const value = {isCartOpen, setCartOpen , addItemToCart, cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}