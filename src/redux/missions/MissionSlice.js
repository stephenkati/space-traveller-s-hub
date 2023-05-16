import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  missions: [],
};

const MissionSlice = createSlice({
  name:'mission',
  initialState,
});

export default MissionSlice.reducer;
