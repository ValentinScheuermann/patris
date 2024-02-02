import React from 'react'
import {
    Navbar,
    Carousel,
    Footer,
    Cards,
    Divider,
    Stats
} from '../../components/index';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Divider/>
        <Carousel/>
        <Stats/>
        <Divider/>
        <Cards/>
        <Divider/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home;