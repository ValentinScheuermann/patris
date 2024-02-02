import React from 'react';
import padreyniño from '../../assets/CardPics/padreyniño.jpg';

const Cards = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto">
      <figure className="lg:w-1/2">
        <img src={padreyniño} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-3xl font-bold font-montserrat text-green-800">
          En conjunto con los padres.
        </h2>
        <p className="text-base font-montserrat whitespace-normal max-w-[400px]">
          {/* Utiliza "max-w-[400px]" para establecer un ancho máximo específico de 400 píxeles */}
          Lorem ipsum dolor sit amet consectetur. Sed maecenas tempus quis elementum nunc integer accumsan. Dolor elit proin auctor vel non. Nec sed pharetra sapien euismod dignissim tortor. Nunc nisl fusce urna at mauris quis augue tincidunt. Condimentum sed donec rhoncus sapien non.
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;