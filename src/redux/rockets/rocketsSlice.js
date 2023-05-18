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
  reducers: {
    reserveRocket: (state, actions) => {
      const id = actions.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    },

    cancelReservation: (state, actions) => {
      const id = actions.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
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

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
