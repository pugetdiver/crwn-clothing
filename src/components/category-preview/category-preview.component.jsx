import ProductCard from '../product-card/product-card.component'
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {


    return (
        <CategoryPreviewContainer>
            <Title to={title}>{title}</Title>
            <Preview>
                {products.length ?
                    (
                        products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />)
                        ))
                    :
                    'There are no products'
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview