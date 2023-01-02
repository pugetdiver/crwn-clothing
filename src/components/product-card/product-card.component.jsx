
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { CartContext } from "../../context/cart.context";

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx'
import { useContext } from 'react';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product

    const { addItemToCart } = useContext(CartContext)

    const AddProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>

            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    )


}

export default ProductCard