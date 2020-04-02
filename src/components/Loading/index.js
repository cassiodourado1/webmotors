import React from 'react';

import { Container } from './styles';

export default function Loading(props) {
  const { isLoading } = props;
  return (
    <>
      {isLoading && (
        <Container>
          <div className="loading__text">carregando...</div>
        </Container>
      )}
    </>
  );
}
