import React from 'react'
import * as Styled from './Navbar.styles';

export const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.LinkItem to="/" className="site-title">About</Styled.LinkItem>
      <Styled.LinkItem to="/universities">Experience</Styled.LinkItem>
      <Styled.LinkItem to="/postalLookup">Projects</Styled.LinkItem>
      <Styled.LinkItem to="/postalLookup">Contact</Styled.LinkItem>
  </Styled.NavbarContainer>
  )
}