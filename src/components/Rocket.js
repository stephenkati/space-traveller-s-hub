import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div className="rocket">
    <div className="image">
      <img
        src={rocket.flickr_images[0]}
        alt="rocket-launch"
        className="rocket-img"
      />
    </div>
    <div className="details">
      <h3 className="name">{rocket.name}</h3>
      <p className="description">
        {rocket.description}
      </p>
      <button type="button" className="btn">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
