
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, quantity, price } = cartItem;

    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext);

    const AddProductToCart = () =>{
        addItemToCart(cartItem);
    }

    const RemoveProductFromCart = () =>{
        removeItemFromCart(cartItem);
    }

    const DeleteProductFromCart = () =>{
        deleteItemFromCart(cartItem);
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>

            <span className='name'>{name}</span>

            <span className='quantity'>
                <div onClick={RemoveProductFromCart} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={AddProductToCart}  className='arrow'>&#10095;</div>

            </span>
            <span className='price'>{price}</span>
            <span onClick={DeleteProductFromCart}  className='remove-button'>&#10005;</span>
        </div>
    )
}

export default CheckoutItem