import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const allMissions = useSelector((state) => state.mission);
  const joinedMissions = allMissions.missions.filter((mymission) => mymission.member);

  return (
    <section>
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
  );
};

export default Profile;
