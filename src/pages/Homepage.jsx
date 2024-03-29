import React from 'react'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

//INFO:
const Homepage = () => {
  return (
    <div>
        <Annoucement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Homepage;