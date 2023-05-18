import { useSelector } from 'react-redux';
import Rocket from '../Rocket';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  return (
    <div className="rocket-container">
      {rocketsList.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
