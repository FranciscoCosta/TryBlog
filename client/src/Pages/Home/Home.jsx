import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Home.scss';

export const Home = () => {

  const posts = [
    {
      id:1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem animi voluptas laudantium? Praesentium vero inventore ipsa, cumque aut libero ab dignissimos, autem optio veniam harum amet, ipsam exercitationem! Perspiciatis?",
      img: "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg",
    },
    {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem animi voluptas laudantium? Praesentium vero inventore ipsa, cumque aut libero ab dignissimos, autem optio veniam harum amet, ipsam exercitationem! Perspiciatis?",
      img: "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg",
    },
    {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem animi voluptas laudantium? Praesentium vero inventore ipsa, cumque aut libero ab dignissimos, autem optio veniam harum amet, ipsam exercitationem! Perspiciatis?",
      img: "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg",
    },
  ]
  return (
    <div className='Home'>
      <Header/>
      <div className='Home__post'>
        {posts.map((post)=>(
          <div className='Home__post-container' key={`post-${post.id}`}>
            <div className='Post__image'>
              <img src={post.img} alt={post.title}/>
            </div>
            <div className='Post__content'>
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        )
        )}
      </div>
      <Footer/>
    </div>
  )
}
