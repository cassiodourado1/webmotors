import React, { Component } from "react";

import { Container } from "./styles";

// export default class Loading extends Component {
//   render() {
//     return (
//       <Container>
//         <div className="loading__text">carregando...</div>
//       </Container>
//     );
//   }
// }


export default function Loading(props) {
  const isLoading = props.isLoading;
  return (
    <>
      {isLoading &&
        <Container>
          <div className="loading__text">carregando...</div>
        </Container>
      }
    </>
  );
}



