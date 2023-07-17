// import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import ExerciseDetail from './Pages/ExerciseDetail/ExerciseDetail.jsx';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound.jsx';

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'} }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/Fitness-Club' element={<Home />} />
        <Route path='/Fitness-Club/exercise/:id' element={<ExerciseDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
