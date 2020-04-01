import React, { Component } from "react";
import {
  Content,
  CenterContent,
  VehicleButton,
  HeaderBar,
  SellButton,
  FilterBar,
  ViewOffersButton,
  ResultSearch
} from "./styles";
import Header from "../../components/Header";
import api from "../../api";

export default class Home extends Component {
  state = {
    make: [],
    models: [],
    versions: [],
    year: [],
    price: []
  };

  handleMarkChange = async event => {
    event.preventDefault();
    const selectedMake = event.target.value;
    const response = await api.get(`/Model?MakeID=${selectedMake}`);
    this.setState({
      models: response.data
    });
  };

  handleModelChange = async event => {
    event.preventDefault();
    const selectedModel = event.target.value;
    const response = await api.get(`/Version?ModelID=${selectedModel}`);
    this.setState({
      versions: response.data
    });
  };

  handleButtonSubmit = event => {
    event.preventDefault();
  };

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
            <FilterBar onSubmit={this.handleButtonSubmit}>
              <select name="make" onChange={this.handleMarkChange}>
                <option value="" selected>
                  Marca
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="model" onChange={this.handleModelChange}>
                <option value="" selected>
                  Modelo
                </option>
                {this.state.models.map(item => (
                  <option key={item.ID} value={item.ID}>
                    {item.Name}
                  </option>
                ))}
                ;
              </select>
              <select name="year" onChange={() => {}}>
                <option value="" selected>
                  Ano
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select name="price" onChange={() => {}}>
                <option value="" selected>
                  Preço
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select className="versions" name="version" onChange={() => {}}>
                {this.state.versions.map(item => (
                  <option key={item.ID} value={item.ID}>
                    {item.Name}
                  </option>
                ))}
                ;
                <option value="" selected>
                  Versão
                </option>
              </select>
              <ViewOffersButton>Ver ofertas</ViewOffersButton>
            </FilterBar>
          </CenterContent>

          <ResultSearch>

          </ResultSearch>
        </Content>
      </>
    );
  }
}
