import './home.css'

import Products from '../../components/Products'
import data from '../../data'
import Newsletter from '../../components/Newsletter'
import ReadBlog from '../../components/ReadBlog'

const Home = () => {
  const featuredProducts = data.filter(product => product.featured)
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
          <Products products={featuredProducts} />
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