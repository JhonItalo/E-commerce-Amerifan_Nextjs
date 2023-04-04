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
     box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
     @media (max-width: 1920px) and (min-width: 1441px) {
          max-width: 1200px;
          height: 500px;
     }
`;