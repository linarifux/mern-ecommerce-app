import { Link } from "react-router-dom"

const Products = ({ products }) => {
    
    return (
        <>
            {products.map(product => {
                return (
                    <div className="product" key={product._id}>
                        <Link to={`/product/${product._id}`} style={{color: 'inherit'}}>
                            <div className="image">
                                <img src={product.mainImage} alt="Product" className="product-image" />
                            </div>
                            <div className="product-title mt-5">{product.title}</div>
                            <div className="product-price">BDT {product.price}</div>
                            <button className="btn btn-dark">Buy Now</button>
                        </Link>
                    </div>

                )
            })}
        </>
    )
}

export default Products