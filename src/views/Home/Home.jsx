import React from 'react'
import {
    Navbar,
    Carousel,
    Footer,
    Cards
} from '../../components/index';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home;