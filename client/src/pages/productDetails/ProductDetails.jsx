import React, { useEffect } from 'react'

import './productDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedProduct } from '../../redux/actions/productActions'
import { useState } from 'react'
import Loading from '../../components/Loading'
const url = 'http://localhost:8000/products'


const ProductDetails = () => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 500)

  const dispatch = useDispatch()
  const { productId } = useParams()
  const fetchProduct = (id) => {
    axios(`${url}/${id}`)
      .then(response => dispatch(selectedProduct(response.data)))
      .catch(e => console.log('Failed to fetch data', e))
  }

  const product = useSelector(state => state?.selectedProductReducer)

  useEffect(() => {
    fetchProduct(productId)
  }, [productId])
  return (
    <section className="container pages">
      {loading ? <Loading /> : <div className="item d-flex gap-5 mt-5">
        <div className="item-image shadow-lg rounded">
          <img src={product?.mainImage} alt="Product" className='img-fluid' />
        </div>
        <div className="item-details">
          <p className="h1">{product?.title}</p>
          <p className='h4'>BDT {product?.price}</p>
          <div className="action-buttons d-flex gap-2">
            <button className="btn btn-lg btn-dark">Buy Now</button>
            <button className="btn btn-lg btn-dark">Add To Cart</button>
          </div>
          <p className="h5 mt-5">{product.description}</p>
        </div>
      </div>}
    </section>
  )
}

export default ProductDetails