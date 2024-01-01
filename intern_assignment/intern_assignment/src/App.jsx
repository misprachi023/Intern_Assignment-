import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BannerSlider from './components/BannerSlider'
import Examination from './components/Examination'
import CardSlider from './components/CardSlider'
import NumberRecord from './components/NumberRecord'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
// import { Slider } from '@mui/material'

function App() {

  return (
    <>
     <Navbar/>
     <BannerSlider/>
     <Examination/>
     <CardSlider/>
     <NumberRecord/>
     <FAQ/>
     <Subscribe/>
     <Footer/>
    </>
  )
}

export default App
