
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.jsx'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';


const CartIcon = () => {

    const { isCartOpen, setCartOpen, itemCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setCartOpen(!isCartOpen);
    }


    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon