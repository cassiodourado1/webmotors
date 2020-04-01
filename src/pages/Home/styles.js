import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterContent = styled.div`
  max-width: 993px;
  width: 100%;
`;

export const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SellButton = styled.button`
  background: transparent;
  color: #ff6e07;
  font-weight: bold;
  font-size: 16px;
  border: 1px #ff6e07 solid;
  padding: 12px 28px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff6e07;
    color: white;
  border: 1px white solid;
  }
`;

export const VehicleList = styled.ul`
  padding: 0;
`;
export const VehicleListItem = styled.ul`
  list-style-type: none;
`;
