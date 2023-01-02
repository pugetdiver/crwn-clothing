
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {

    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext)

    const navigateToCheckout = () =>{
        navigate('checkout');
    }

    return (
        <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>    
        <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    )

}

export default CartDropdown