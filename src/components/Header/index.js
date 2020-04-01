import React, { Component } from 'react';
import { HeaderContent, Container } from './styles';
import logo from '../../assets/img/webmotors.svg';

export default class Header extends Component {
  render() {
    return(
      <HeaderContent>
        <Container>
          <img src={logo} alt="logo" />
        </Container>
      </HeaderContent>
    );
  }
}
