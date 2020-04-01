import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  background: #3e3b3bb8;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading__text {
    color: #fff;
    font-size: 36px;
    animation: zoom 2s infinite;
    transform: scale(0, 0);
    animation-fill-mode: forwards;

    @keyframes zoom {
      0% { transform: scale(1, 1);}
      50% { transform: scale(0, 0);}
      100% { transform: scale(1, 1);}
    }
  }
`;
