import React from 'react'
import '../styles/Footer.css';
import footerImg from '../assets/footerBackImg.png';
import fb from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import quora from '../assets/quora.svg';
import location from '../assets/location.svg'
import timerClock from '../assets/timerClock.svg';
import train from '../assets/train.svg';
import privacy from '../assets/privacy.svg'
const Footer = () => {
  return (
    <div className='footerMainDiv'>
        <div className='footerImgDiv'>
          <img src={footerImg} alt="footer img" />
        </div>
        <div className='footerContentMainDiv'>
            <div className='contactDiv'>
                <h2>Contact us</h2>
                <p>Address: Lorem ipsum dolor sit amet</p>
                <p>Email id: Totam odio dolores laboriosam</p>
                <p>Phone no: 123456789</p>
            </div>
            <div className='followDiv'>
                <h2>Follow us</h2>
                <div className='followIconDiv'>
                    <img src={fb} alt="fb" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                    <img src={quora} alt="quora" />
                </div>
            </div>
            <div className='headOfficeDiv'>
                <h2>Head Office</h2>
                <div className='headOffice'>
                    <img src={location} alt="location" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint corrupti</p>
                </div>
                <div className='headOffice'>
                    <img src={timerClock} alt="timerClock" />
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='headOffice'>
                    <img src={timerClock} alt="timerClock" />
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='headOffice'>
                    <img src={train} alt="train" />
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </div>
        <div className='endDiv'>
            <p>© 2021 All Rights Reserved. Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer
