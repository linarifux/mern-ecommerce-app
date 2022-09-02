import React from 'react'
import data from '../data'
import Products from '../components/Products'

const ShopAll = () => {
  return (
    <section className="shop-all pages container">
      <p className="h1 text-center my-5">All Products</p>
      <div className="products-area">
        <Products products={data} />
      </div>
    </section>
  )
}

export default ShopAll