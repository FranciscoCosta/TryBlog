import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Write.scss'

export const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Header/>
      <div className='Write'>
        <div className="Write__content">
          <input type="text" placeholder='Title'/>
          <div className="Write__editor-container">
          <ReactQuill theme="snow" className='Write__editor-box' value={value} onChange={setValue} />
          </div>
        </div>
        <div className="Write__menu">
          <div className="Write__item">
            <h1>Pubish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input type="file" name='' style={{ display:"none" }} id='file'/>
            <label  className="file" htmlFor="file">Upload Image</label>
            <div className="Write__menu-buttons">
              <button className='Save__button'>Save as Draft</button>
              <button className='Update__button'>Update</button>
            </div>
          </div>
          <div className="Write__item">
            <h1>Category</h1>
            <div className="Write__item-cat">
              <input type="radio" name='cat' value="projects" id='projects'/>
              <label htmlFor="projects">Projects</label>
            </div>
            <div className="Write__item-cat">
              <input type="radio" name='cat' value="technology" id='technology'/>
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="Write__item-cat"> 
              <input type="radio" name='cat' value="discussions" id='discussions'/>
              <label htmlFor="discussions">Discussions</label>
            </div>
            <div className="Write__item-cat">
              <input type="radio" name='cat' value="questions" id='questions'/>
              <label htmlFor="questions">Questions</label>
            </div>
            <div className="Write__item-cat">
              <input type="radio" name='cat' value="news" id='news'/>
              <label htmlFor="news">News</label>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
