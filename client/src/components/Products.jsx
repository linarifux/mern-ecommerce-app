
const Products = ({ products }) => {
    return (
        <>
            {products.map(product => {
                return (
                    <div className="product">
                        <div className="image">
                            <img src={product.mainImage} alt="Product" className="product-image" />
                        </div>
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">BDT {product.price}</div>
                        <button className="btn btn-dark">Buy Now</button>
                    </div>
                )
            })}
        </>
    )
}

export default Products