import React, { Component } from "react";
import {
  Content,
  CenterContent,
  VehicleButton,
  HeaderBar,
  SellButton,
  FilterBar,
  ViewOffersButton,
} from "./styles";
import Header from "../../components/Header";

export default class Home extends Component {
  state = {
    make: [],
    model: [],
    year: [],
    price: [],
    version: [],
  }

  render() {
    return (
      <>
        <Header />
        <Content>
          <CenterContent>
            <HeaderBar>
              <ul>
                <li>
                  <VehicleButton>
                    <span className="label">comprar</span>
                    <span className="vehicle">Moto</span>
                  </VehicleButton>
                </li>
                <li>
                  <VehicleButton>
                    <span className="label">comprar</span>
                    <span className="vehicle moto">Moto</span>
                  </VehicleButton>
                </li>
              </ul>
              <SellButton>Vender meu car</SellButton>
            </HeaderBar>
            <FilterBar onSubmit={()=>{}}>
              
              <select name="make">
                <option value="" selected>Marca</option> 
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="model">
                <option value="" selected>Modelo</option> 
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="year">
                <option value="" selected>Ano</option> 
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="price">
                <option value="" selected>Preço</option> 
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="version">
                <option value="" selected>Versão</option> 
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <ViewOffersButton>Ver ofertas</ViewOffersButton>
            </FilterBar>
            
          </CenterContent>
        </Content>
      </>
    );
  }
}
