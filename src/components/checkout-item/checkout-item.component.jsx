
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.jsx'
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, quantity, price } = cartItem;

    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    const AddProductToCart = () => {
        addItemToCart(cartItem);
    }

    const RemoveProductFromCart = () => {
        removeItemFromCart(cartItem);
    }

    const DeleteProductFromCart = () => {
        deleteItemFromCart(cartItem);
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>

            <BaseSpan>{name}</BaseSpan>

            <Quantity>
                <Arrow onClick={RemoveProductFromCart}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={AddProductToCart} >&#10095;</Arrow>
            </Quantity>
            
            <BaseSpan >{price}</BaseSpan>
            <RemoveButton onClick={DeleteProductFromCart} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem