import styled from "styled-components";
import iconMoto from "../../assets/img/moto.svg";
import iconCar from "../../assets/img/car.svg";

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CenterContent = styled.div`
  width: 993px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    border-bottom: 1px;
    li {
      list-style-type: none;
    }
  }
`;

export const SellButton = styled.a`
  display: block;
  background: transparent;
  color: #ff6e07;
  font-weight: bold;
  font-size: 16px;
  border: 1px #ff6e07 solid;
  padding: 12px 28px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 992px) {
    padding: 6px;
    font-size: 13px;
    width: 120px;
  }

  &:hover {
    background: #ff6e07;
    color: white;
    border: 1px white solid;
  }
`;

export const VehicleButton = styled.button`
  padding: 16px;
  border: none;
  background: transparent;
  text-transform: uppercase;
  width: 150px;
  border-bottom: 3px #afb7be solid;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 992px) {
    width: 110px;
  }

  &:hover {
    border-bottom: 3px solid #dc3545;
    .vehicle {
      color: #dc3545;
    }
  }

  .label {
    font-size: 12px;
    color: gray;
    display: block;
  }
  .vehicle {
    background-image: url(${iconCar});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 50px;
    color: #afb7be;
    font-size: 24px;
    display: block;

    @media (max-width: 992px) {
      background-size: 20px;
      padding-left: 30px;
      font-size: 18px;
    }
    &.moto {
      background-image: url(${iconMoto});
    }
  }
`;

export const FilterBar = styled.form`
  max-width: 100%;
  padding: 1rem 2rem;
  background: #fff;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border-radius: 3px;

  select {
    width: 230px;
    height: 36px;
    text-overflow: "";
    text-indent: 0.01px;
    margin: 10px 5px;

    &.versions {
      width: 300px;
    }

    @media (max-width: 768px) {
      border: 1px gray solid;
      width: 100% !important;
    }
  }
`;

export const ViewOffersButton = styled.button`
  padding: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background: #dc3545;
  border-radius: 5px;
  width: 200px;
  height: 36px;
  cursor: pointer;

  @media (max-width: 992px) {
    width: 100% !important;
  }

  &:hover {
    background: #fff;
    color: #dc3545;
    border: 1px #dc3545 solid;
  }
`;

export const ResultSearchGrid = styled.div`
  width: 993px;
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Car = styled.div`
  flex-basis: 300px;
  display: flex;
  flex-flow: column;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

  .car__image {
    height: 200px;
  }
  .car__info {
    display: flex;
    flex-flow: column;
    flex: 1;
    padding: 16px;
    .name {
      margin: 0;
      font-size: 22px;
    }
    .version {
      margin: 0;
      padding-top: 16px;
      font-size: 14px;
    }
    .price {
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .info__footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .year {
    }
    .km {
    }
  }

  .car__image {
    img {
      max-width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const Pagination = styled.div`
  width: 300px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    padding: 8px 25px;
    cursor: pointer;
    background: transparent;
    color: #dc3545;
    border: 1px #dc3545 solid;
    border-radius: 3px;

    &:disabled {
      color: #aeaaaa;
      border: 1px #aeaaaa solid;
      cursor: not-allowed;
    }
  }
`;
