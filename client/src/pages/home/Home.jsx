import './home.css'
import axios from 'axios'
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import ReadBlog from '../../components/ReadBlog'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { setProducts } from '../../redux/actions/productActions'

const Home = () => {
  const dispatch = useDispatch()

  const fetchProducts = () => {
    axios('http://localhost:8000/products/all')
      .then(response => dispatch(setProducts(response.data)))
      .catch(error => console.log('error fetching data', error))
  }

  const products = useSelector(state => state.allProducts)
  const filteredProducts = products.filter(product => product.featured === true)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="home pages">
      <section id="home">
        <div className="hero">
          <div className="text-area">
            <h2>We Promise to Bring Confidence.</h2>
            <h5>Shop with the biggest platfrom in the market.</h5>
            <div className="hero-buttons mt-5 d-flex align-items-center justify-content-center">
              <button className="btn btn-lg btn-dark">SHOP MEN</button>
              <div className='line mx-5'></div>
              <button className="btn btn-lg btn-dark">SHOP WOMEN</button>
            </div>
          </div>
        </div>
      </section>
      <section className="feature container">
        <div className="section-title">Feature Products</div>
        <div className="section-subtitle text-center h5">Most sold and recommended products of our store.</div>
        <div className="products-area">
          {filteredProducts ? <Products products={filteredProducts} /> : <Loading />}
        </div>
      </section>
      <section className="newsletter container">
        <Newsletter />
      </section>
      <section className="read-blog container">
        <ReadBlog />
      </section>
    </div>
  )
}

export default Home