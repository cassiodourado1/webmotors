import React, { Component } from "react";
import {
  Content,
  CenterContent,
  VehicleButton,
  HeaderBar,
  SellButton,
  FilterBar,
  ViewOffersButton,
  ResultSearchGrid,
  Car
} from "./styles";
import Header from "../../components/Header";
import api from "../../api";

export default class Home extends Component {
  state = {
    make: [],
    models: [],
    versions: [],
    allVehicles: [],
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

  handleButtonSubmit = async event => {
    event.preventDefault();
    const response = await api.get(`/Vehicles?Page=1`);
    this.setState({
      allVehicles: response.data
    });
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
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
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

          <ResultSearchGrid>
            {this.state.allVehicles.map(item => (
              <Car key={item.ID}>
                <div className="car__image">
                  <img src={item.Image} alt={item.Model} />
                </div>
                <div className="car__info">
                  <h2 className="name">{item.Model}</h2>
                  <p className="version">{item.Version}</p>
                  <p className="price">{`R$${item.Price}`}</p>
                  <div className="info__footer">
                    <span className="year">{item.YearModel}</span>
                    <span className="km">{item.KM}</span>
                  </div>
                </div>
              </Car>
            ))}
          </ResultSearchGrid>
        </Content>
      </>
    );
  }
}
