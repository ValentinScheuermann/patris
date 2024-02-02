import React from 'react';
import {
  Navbar,
  Carousel,
  Footer,
  Cards,
  Divider,
  Stats,
  Navbar2
} from '../../components/index';

import padreyniñoImage from '../../assets/CardPics/padreyniño.jpg';
import tedxImage from '../../assets/CardPics/tedx.jpg';

const Home = () => {
  const cardData1 = {
    image: padreyniñoImage,
    title: 'En conjunto con los padres.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sed maecenas tempus quis elementum nunc integer accumsan...',
    buttonText: 'Ver más',
  };

  const cardData2 = {
    image: tedxImage,
    title: 'Construyendo el futuro.',
    description: 'Lorem ipsum dolor sit amet consectetur. Sed maecenas tempus quis elementum nunc integer accumsan...',
    buttonText: 'Ver más',
  };

  return (
    <div>
      <Navbar />
      <Navbar2/>
      <Carousel />
      <Stats />
      <Divider />
      <Cards cardData={cardData1} />
      <Divider />
      <Cards cardData={cardData2} />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;