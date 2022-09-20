import React from 'react';
import CTA from './components/CTA/CTA';
import ME from '@assets/RahulShial.png';
import Socials from './components/Socials/Socials';

import './Header.css';

const Header = () => {
  return (
    // <header>
      <div className="header">

      <div className="header__container">
        <div className="header__text">
          Hello, I'm
          <span className='highlight'> Rahul Shial.</span>
          <br/>
          I'm a Full-Stack Developer.
        </div>
        <Socials />
      </div>
      </div>
    // </header>
  );
};

export default Header;