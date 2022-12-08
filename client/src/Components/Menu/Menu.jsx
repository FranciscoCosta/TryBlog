import React from 'react'
import './Menu.scss'

export const Menu = () => {
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
    <div className='Menu'>
        <h1>Other posts you may like:</h1>
        {posts.map((post)=>(
            <div className="Menu__post" key={`post-${post.id}`}>
                <img src={post.img} alt={post.title} />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
