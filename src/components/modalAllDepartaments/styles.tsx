import styled from "styled-components";

export const Conteiner = styled.div`
     width: 80vw;
     height: 400px;
     display: none;
     align-items: flex-start;
     align-content: flex-start;
     justify-content: space-around;
     flex-wrap: wrap;
     gap: 1rem;
     position: absolute;
     top: 102%;
     background-color: white;
     z-index: 1;
     .items {
          all: initial;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          li {
               all: initial;
          }
          p {
               font-weight: bold;
          }
     }
`;
