import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  status: 'update',
};

export const getRokets = createAsyncThunk(
  'spaceTravelsHub/FETCHDATA',
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRokets.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(getRokets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: 'update',
      }));
  },
});

export default rocketsSlice.reducer;
