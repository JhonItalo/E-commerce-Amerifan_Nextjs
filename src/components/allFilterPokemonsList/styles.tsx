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
     justify-content: space-between;
     flex-wrap: wrap;
     .controlParentStyle {
          border: 1px solid rgb(200, 200, 200);
          margin-bottom: 2rem;
          &:hover {
               border: 1px solid grey;
          }
     }
`;
