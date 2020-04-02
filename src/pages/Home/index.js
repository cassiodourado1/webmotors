import React, { Component } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import api from "../../api";
import {
  Content,
  CenterContent,
  VehicleButton,
  HeaderBar,
  SellButton,
  FilterBar,
  ViewOffersButton,
  ResultSearchGrid,
  Car,
  Pagination,
} from "./styles";

export default class Home extends Component {
  state = {
    makes: [],
    models: [],
    versions: [],
    allVehicles: [],
    year: [],
    price: [],
    atualPage: 1,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await api.get(`/Make`);
    this.setState({
      makes: response.data,
      isLoading: false,
    });
  }

  handleMarkChange = async (event) => {
    this.setState({ isLoading: true });
    event.preventDefault();
    const selectedMake = event.target.value;
    const response = await api.get(`/Model?MakeID=${selectedMake}`);
    this.setState({
      models: response.data,
      isLoading: false,
    });
  };

  handleModelChange = async (event) => {
    this.setState({ isLoading: true });
    event.preventDefault();
    const selectedModel = event.target.value;
    const response = await api.get(`/Version?ModelID=${selectedModel}`);
    this.setState({
      versions: response.data,
      isLoading: false,
    });
  };

  handleButtonSubmit = async (event) => {
    this.setState({
      allVehicles: [],
      isLoading: true,
    });
    event.preventDefault();
    const response = await api.get(`/Vehicles?Page=1`);
    this.setState({
      allVehicles: response.data,
      isLoading: false,
    });
  };

  handleButtonPrevius = async (event) => {
    this.setState({
      allVehicles: [],
      atualPage: this.state.atualPage - 1,
      isLoading: true,
    });
    event.preventDefault();
    const response = await api.get(
      `/Vehicles?Page=${this.state.atualPage - 1}`
    );
    this.setState({
      allVehicles: response.data,
      isLoading: false,
    });
  };

  handleButtonNext = async (event) => {
    this.setState({
      allVehicles: [],
      atualPage: this.state.atualPage + 1,
      isLoading: true,
    });
    event.preventDefault();
    const response = await api.get(
      `/Vehicles?Page=${this.state.atualPage + 1}`
    );
    this.setState({
      allVehicles: response.data,
      isLoading: false,
    });
  };

  render() {
    const { isLoading, allVehicles, atualPage, makes, models, versions } = this.state;
    return (
      <>
        <Loading isLoading={isLoading} />
        <Header />
        <Content>
          <CenterContent>
            <HeaderBar>
              <ul>
                <li>
                  <VehicleButton>
                    <span className="label">comprar</span>
                    <span className="vehicle">Carro</span>
                  </VehicleButton>
                </li>
                <li>
                  <VehicleButton>
                    <span className="label">comprar</span>
                    <span className="vehicle moto">Moto</span>
                  </VehicleButton>
                </li>
              </ul>
              <SellButton href="https://www.webmotors.com.br/vender/?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-2::venda-seu-veiculo">
                Venda seu carro
              </SellButton>
            </HeaderBar>
            <FilterBar onSubmit={this.handleButtonSubmit}>
              <select name="make" onChange={this.handleMarkChange}>
                {makes.map((item) => (
                  <option key={item.ID} value={item.ID}>
                    {item.Name}
                  </option>
                ))}
                <option value="" selected>
                  Marca
                </option>
              </select>
              <select name="model" onChange={this.handleModelChange}>
                <option value="" selected>
                  Modelo
                </option>
                {models.map((item) => (
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
                {versions.map((item) => (
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
            {allVehicles.map((item) => (
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
                    <span className="km">{`${item.KM}Km`}</span>
                  </div>
                </div>
              </Car>
            ))}
          </ResultSearchGrid>
          {allVehicles.length ? (
            <Pagination>
              <button
                type="button"
                disabled={atualPage === 1}
                className="pagenation__button"
                onClick={this.handleButtonPrevius}
              >
                Anterior
              </button>
              <span className="page__actual">{atualPage}</span>
              <button
                type="button"
                className="pagenation__button"
                onClick={this.handleButtonNext}
              >
                Próximo
              </button>
            </Pagination>
          ) : (
            <p>Sem resultados</p>
          )}
        </Content>
      </>
    );
  }
}
