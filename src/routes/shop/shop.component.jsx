import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/products.context"

import './shop.styles.scss'

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.length ?
                (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    )
                ))
                :
                'There are no products'
            }
        </div>
    )

}


export default Shop