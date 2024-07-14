import React from 'react'
import Banner from './Banner'
import "./homepage.css"
import Cards from './Cards'
import Homesection from './Homesection'
import Features from './Features'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Blogs from '../../Components/Blogs'
import Readytotalk from '../../Components/Readytotalk'
import Login from '../User/Login'






const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cards />
      <Homesection/>
      <Features/>
      <Readytotalk />
      <Blogs />
      <Footer />
   
      
     
   
    </div>


  )
}

export default Homepage
