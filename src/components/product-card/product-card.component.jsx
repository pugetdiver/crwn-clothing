
import Button from '../button/button.component'
import { CartContext } from "../../context/cart.context";

import './product-card.styles.scss'
import { useContext } from 'react';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product

    const { addItemToCart} = useContext(CartContext)

    const AddProductToCart = () =>{
        addItemToCart(product);
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>

            </div>
            <Button buttonType='inverted' onClick={AddProductToCart} >Add to cart</Button>
        </div>
    )


}

export default ProductCard