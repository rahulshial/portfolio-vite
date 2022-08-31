import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/rahulshial/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/rahulshial/' target="_blank"><BsGithub /></a>
    </div>
  );
};

export default Socials;