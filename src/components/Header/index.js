import React from 'react';
import { HeaderContent, Container } from './styles';
import logo from '../../assets/img/webmotors.svg';

function Header() {
  return (
    <HeaderContent>
      <Container>
        <img src={logo} alt="logo" />
      </Container>
    </HeaderContent>
  );
};


export default Header;
