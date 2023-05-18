import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const allMissions = useSelector((state) => state.mission);
  const joinedMissions = allMissions.missions.filter((mymission) => mymission.member);
  const allRockets = useSelector((state) => state.rockets);
  const reserdeRockets = allRockets.rockets.filter((myRocket) => myRocket.reserved);

  return (
    <div className="theprofile">
      <section className="missionprofile">
        <div className="missions-joined">
          <h1>My Missions</h1>
          {
            joinedMissions.length ? (
              <ul className="mission-joined-profile">
                {
                  joinedMissions.map((mission) => (
                    <li key={mission.mission_id}>
                      {mission.mission_name}
                    </li>
                  ))
                }
              </ul>
            ) : (
              <div>
                <p>No missions joined yet!</p>
                <span>
                  Go to to
                  <NavLink to="/missions"> Missions </NavLink>
                  to join a mission
                </span>
              </div>
            )
          }
        </div>
      </section>
      <section className="rocketprofile">
        <div className="missions-joined">
          <h1>My Rockets</h1>
          {
            reserdeRockets.length ? (
              <ul className="mission-joined-profile">
                {
                  reserdeRockets.map((rocket) => (
                    <li key={rocket.id}>
                      {rocket.name}
                    </li>
                  ))
                }
              </ul>
            ) : (
              <div>
                <p>No Rockets reserved yet!</p>
                <span>
                  Go to to
                  <NavLink to="/"> Rockets </NavLink>
                  to reserve a rocket.
                </span>
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
};

export default Profile;
