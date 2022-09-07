import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import NoProductsFound from '../components/NoProductsFound'
import Products from '../components/Products'
import { setProducts } from '../redux/actions/productActions'

const Apparel = () => {
  const dispatch = useDispatch()

  const fetchProducts = () => {
    axios('http://localhost:8000/products/all')
      .then(response => dispatch(setProducts(response.data)))
      .catch(error => console.log('error fetching data', error))
  }

  const products = useSelector(state => state.allProducts)
  const filteredProducts = products.filter(product => product.category === 'apparel')

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className="apparel pages container">
      <p className="h1 text-center my-5">Apparel</p>
      <div className="products-area">
        {!products && <Loading />}
        {filteredProducts.length !== 0 ? <Products products={filteredProducts} /> : <NoProductsFound />}
      </div>
    </section>
  )
}

export default Apparel