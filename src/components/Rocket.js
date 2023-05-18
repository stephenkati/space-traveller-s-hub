import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const btnText = rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket';
  const btnClass = rocket.reserved ? 'btnReserved' : 'btn';
  const dispatch = useDispatch();
  const handleClick = () => {
    if (rocket.reserved) {
      dispatch(cancelReservation(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };
  return (
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
          {rocket.reserved && <span className="reserved">Reserved</span>}
          {rocket.description}
        </p>
        <button type="button" className={btnClass} onClick={handleClick}>{btnText}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
