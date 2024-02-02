import React from 'react'
import {
    Navbar,
    Carousel,
    Footer,
    Cards,
    Divider
} from '../../components/index';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Divider/>
        <Carousel/>
        <Divider/>
        <Cards/>
        <Divider/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home;