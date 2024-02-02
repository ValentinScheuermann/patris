import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ cardData }) => {
  const { image, title, description, buttonText } = cardData;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto">
      <figure className="lg:w-1/2">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-4xl font-bold font-montserrat text-green-800">
          {title}
        </h2>
        <p className="text-lg font-montserrat whitespace-normal max-w-[400px]">

          {description}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;