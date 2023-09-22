import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'
import NewsLetter from '../components/Newsletter'
import Products from '../components/Products'

import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Catagories/>
        <Products />
        <NewsLetter />
        <Footer/>
    </div>
  )
}
