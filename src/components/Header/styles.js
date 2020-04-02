import styled from 'styled-components';

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background: #f4f4f4;
  @media (max-width: 768px) {
    width: unset;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 993px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
