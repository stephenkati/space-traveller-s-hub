import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../../redux/missions/MissionSlice';

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
              {!mission.member && (
                <>
                  <td>
                    <span className="not-a-member">NOT A MEMBER</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(joinMission(mission.mission_id))}
                      className="join-mission"
                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
              {mission.member && (
                <>
                  <td>
                    <span className="active-member">Active member</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(leaveMission(mission.mission_id))}
                      className="leave-mission"
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Mission;
