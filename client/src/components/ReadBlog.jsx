import React from 'react'
import BlogImage from '../assets/blog.jpg'

const ReadBlog = () => {
  return (
    <div className="blog shadow rounded">
      <div className="text-section">
        <p className="h1">Catch up with VOID PRODUCTIONS</p>
        <p>Read about the latest products, company news, our customer favorites, and more!</p>
        <button className="btn btn-large btn-dark">READ OUR BLOG</button>
      </div>
      <div className="image-section">
        <img src={BlogImage} alt="Blog" className="blog-image" />
      </div>
    </div>
  )
}

export default ReadBlog