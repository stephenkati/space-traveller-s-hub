import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './missions/MissionSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: MissionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
