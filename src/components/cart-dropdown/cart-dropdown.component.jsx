
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {

    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext)

    const navigateToCheckout = () =>{
        navigate('checkout');
    }

    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>    
        <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
      </div>
    )

}

export default CartDropdown