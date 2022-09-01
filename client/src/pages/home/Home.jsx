import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="home">
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
      <section className="feature">
        <div className="section-title">Feature Products</div>
      </section>
    </div>
  )
}

export default Home