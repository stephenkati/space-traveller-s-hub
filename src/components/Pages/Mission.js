import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/MissionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions || []);

  useEffect(() => {
    if (!missions.length) dispatch(getMissions());
  }, [dispatch, missions.length]);

  return (
    <table className="mission-table" cellSpacing={0}>
      <thead>
        <tr>
          <th className="table-head">Mission</th>
          <th className="table-head">Description</th>
          <th className="table-head">Status</th>
          <th className="table-head">Join</th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (
            <tr className="mission-list" key={mission.mission_id}>
              <td className="mission-name"><span>{mission.mission_name}</span></td>
              <td className="description">{mission.description}</td>
              <td>
                <span className="not-a-member">NOT A MEMBER</span>
              </td>
              <td>
                <button
                  type="button"
                  className="join-mission"
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Mission;
