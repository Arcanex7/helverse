import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer';
import './index.css'
import SwirlCursor from './swirl';
import Curs from './cursorpage';

import Card from './cards';
import Nav from './nav';
import Hero from './hero';
import Brw from './browser';
import Rev from './review';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SwirlCursor/>
    <Nav/>
    <Hero/>
    <Rev/>
    <Curs/>
    <Brw/>
    <br />
    <br />
    
    <Card/>
    <Footer/>
  </React.StrictMode>
);

