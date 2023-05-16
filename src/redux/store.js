import { configureStore } from "@reduxjs/toolkit";
import MissionReducer from "./missions/MissionSlice";

const store = configureStore({
  reducer: {
    mission: MissionReducer,
  }
});

export default store;
