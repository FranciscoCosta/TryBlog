import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Write.scss'

export const Write = () => {
  return (
    <div>
      <Header/>
      <div className='Write'>
        <div className="Write__content">
          Content
        </div>
        <div className="Write__menu">
          <div className="Write__item1">i1</div>
          <div className="Write__item1">i2</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
