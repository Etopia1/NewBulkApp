import React, { useState } from 'react';
import Navebar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Fotter from '../components/Footer/Footer'

const Homepage = () => {
    const [popup, setPopup]=useState(false)
  return (
    <>
      <Navebar popup={popup} setPopup={setPopup} />
      <Hero popup={popup} setPopup={setPopup}/>
      <Fotter/>
    </>
  );
}

export default Homepage;
