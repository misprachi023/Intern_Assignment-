import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Subscribe.css'
import subscribeImg from '../assets/subscribeImg.svg';
const Subscribe = () => {
  return (
    <div className='subscribeMainDiv'>
      <div className='subscribeTextContentDiv'>
        <h1>Subscribe</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque illum voluptatem dolor rem nostrum quaerat. Recusandae facilis ipsam vero.</p>
        <input type="email" placeholder='Enter your Email Address' />
        <button>Subscribe Now<FontAwesomeIcon className="bannerSlideBtnArrow" icon={faCaretRight}/></button>
      </div>
      <div className='subscribeImgDiv'>
        <img src={subscribeImg} alt="subscribe img" />
      </div>
      
    </div>
  )
}

export default Subscribe
