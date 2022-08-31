import React from 'react';
import CTA from './components/CTA/CTA';
import ME from '@assets/RahulShial.png';
import Socials from './components/Socials/Socials';

import './Header.css';

const Header = () => {
  return (
    // <div>Header</div>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rahul Shial</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />

        <div className="me"></div>
        <img src={ME} alt='me' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </header>
  );
};

export default Header;