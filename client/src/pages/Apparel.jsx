import React from 'react'
import Products from '../components/Products'
import data from '../data'

const Apparel = () => {
  const apparel = data.filter(product => product.category === 'apparel')
  return (
    <section className="apparel pages container">
      <p className="h1 text-center my-5">Apparel</p>
      <div className="products-area">
        <Products products={apparel} />
      </div>
    </section>
  )
}

export default Apparel