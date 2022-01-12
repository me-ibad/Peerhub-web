import React from 'react';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/Landingpage';
import Signin from 'pages/Signin';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import FooterSmall from 'components/Footers/FooterSmall';
import OtpScreen from 'pages/OtpScreen';

function Main() {
  return (
    <>
      <IndexNavbar />
      <main>
        <section className='relative w-full py-32 h-full  min-h-screen '>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/otpscreen' element={<OtpScreen />} />
          </Routes>
        </section>
      </main>
      <FooterSmall />
    </>
  );
}

export default Main;
