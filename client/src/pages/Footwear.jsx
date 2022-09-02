import React from 'react'
import Products from '../components/Products'
import data from '../data'

const Footwear = () => {
  const footwear = data.filter(product => product.category === 'footwear')
  return (
    <section className="footwear pages container">
      <p className="h1 text-center my-5">Footwear</p>
      <div className="products-area">
        <Products products={footwear} />
      </div>
    </section>
  )
}

export default Footwear