
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss'


const CartIcon = () => {

    const { isCartOpen, setCartOpen, itemCount } = useContext(CartContext)


    const toggleIsCartOpen = () => {
        setCartOpen(!isCartOpen);
    }


    return (
        <div onClick={toggleIsCartOpen} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

export default CartIcon