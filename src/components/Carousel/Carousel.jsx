import React from 'react';
import foto1 from '../../assets/CarouselPics/foto1.jpg';
import foto2 from '../../assets/CarouselPics/foto2.jpg';
import foto3 from '../../assets/CarouselPics/foto3.jpg';
import foto4 from '../../assets/CarouselPics/foto4.jpg';

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full" style={{ height: '400px' }}>
      <div id="slide1" className="carousel-item relative w-full">
          <img src={foto1} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={foto2} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={foto3} className="w-full h-full object-cover object-top" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={foto4} className="w-full h-full object-cover object-bottom" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;