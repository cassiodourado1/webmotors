import React, { Component } from 'react';
import { Content, CenterContent, VehicleList, VehicleListItem,  HeaderBar, SellButton } from './styles';
import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <Content>
        <CenterContent>
        <HeaderBar>
        <VehicleList>
          <VehicleListItem>
            <a>Carro</a>
          </VehicleListItem>
          <VehicleListItem>
            <a>Moto  </a>
          </VehicleListItem>
        </VehicleList>
        <SellButton>Vender meu car</SellButton>
        </HeaderBar>
        </CenterContent>
      </Content>
      </>
    )
  }
}
