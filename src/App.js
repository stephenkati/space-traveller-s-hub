import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Missions from './components/Pages/Mission';
import Rockets from './components/Pages/Rocket';
import Profile from './components/Pages/Profile';
import { getRokets } from './redux/rockets/rocketsSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch(); // fetch rockets list when page loads for the first time..
  useEffect(() => {
    dispatch(getRokets());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
export default App;
