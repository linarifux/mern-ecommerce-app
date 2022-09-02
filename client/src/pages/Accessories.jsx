import React from 'react'
import Products from '../components/Products'
import data from '../data'

const Accessories = () => {
  const accessories = data.filter(product => product.category === 'accessorries')
  return (
    <section className="accessories pages container">
      <p className="h1 text-center my-5">Accessories</p>
      <div className="products-area">
        <Products products={accessories} />
      </div>
    </section>
  )
}

export default Accessories