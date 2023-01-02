
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {


    return (
        <div className='category-preview-container'>
            <Link className='title' to={title}>{title}</Link>
            <div className="preview">
                {products.length ?
                    (
                        products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />)
                        ))
                    :
                    'There are no products'
                }
            </div>
        </div>
    )
}

export default CategoryPreview