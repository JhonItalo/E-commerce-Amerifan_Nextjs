import styled from "styled-components";

export const ConteinerPokemons = styled.div`
     width: 70%;
     min-height: 70vh;
     padding: 1rem;
     position: relative;
     border-top: 1px solid rgb(230, 230, 230);

     .titleOrder {
          display: flex;
          margin-bottom: 2rem;
          justify-content: space-between;
          align-items: center;

          select {
               padding: 0.2rem 0.5rem;
               display: flex;
               font-size: 1rem;
          }
     }
`;

export const ListPokemons = styled.div`
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     gap: 3rem;

     .controlParentStyle {
          border: 1px solid rgb(200, 200, 200);
     }

     @media (max-width: 1920px) and (min-width: 1441px) {
          gap: 2rem;
     }
`;
