import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

const getMissions = createAsyncThunk(
  'missions/fetch-missions',
  async (thunkAPI) => {
    try {
      const response = await fetch(missionUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed, try again!');
    }
  },
);

const initialState = {
  missions: [],
};

const MissionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission(state, action) {
      const joined = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, member: true };
      });
      return {
        ...state,
        missions: joined,
      };
    },
    leaveMission(state, action) {
      const leftMission = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, member: false };
      });
      return {
        ...state,
        missions: leftMission,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const missionSet = action.payload.map((mission) => ({
        ...mission,
        member: false,
      }));
      return {
        ...state,
        missions: missionSet,
      };
    });
  },
});

export const { joinMission, leaveMission } = MissionSlice.actions;
export { getMissions };
export default MissionSlice.reducer;
