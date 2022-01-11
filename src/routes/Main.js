import React from 'react';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/Landingpage';
import Signin from 'pages/Signin';
function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </>
  );
}

export default Main;
