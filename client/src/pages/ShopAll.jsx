import React from 'react'

import Products from '../components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'
import { useEffect } from 'react'
import Loading from '../components/Loading'

const ShopAll = () => {
  const dispatch = useDispatch()

  const fetchProducts = () => {
    axios('http://localhost:8000/products/all')
      .then(response => dispatch(setProducts(response.data)))
      .catch(error => console.log('error fetching data', error))
  }

  const products = useSelector(state => state.allProducts)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className="shop-all pages container">
      <p className="h1 text-center my-5">All Products</p>
      <div className="products-area">
        {products ? <Products products={products} /> : <Loading />}
      </div>
    </section>
  )
}

export default ShopAll