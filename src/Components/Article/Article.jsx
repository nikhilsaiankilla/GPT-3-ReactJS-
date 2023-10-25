import React from 'react'
import './Article.css'
const Article = ({imgURL,date,title}) => {
  return (
    <div className='gpt3__blog__container__article'> 
        <div className="gpt3__blog__container__article__img">
          <img src={imgURL} alt="blog-img" />
        </div>
        <div className="gpt3__blog__container__article__content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>read full article</p>
        </div>
    </div>
  )
}

export default Article