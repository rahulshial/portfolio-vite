import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineDashboard, AiOutlineProject } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <AiOutlineDashboard />
      </a>
      <a href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <AiOutlineProject />
      </a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;