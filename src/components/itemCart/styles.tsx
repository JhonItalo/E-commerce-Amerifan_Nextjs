import styled from "styled-components";

export const Item = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-right: 1rem;
`;
export const ConteinerFilme = styled.div`
     display: flex;
     gap: 1rem;
     align-items: center;
     height: 100px;

     .title {
          margin-left: 2rem;
          font-size: 1.5rem;
          letter-spacing: 4px;
     }
`;

export const CountPrice = styled.div`
     display: flex;
     gap: 8rem;
`;
export const Count = styled.div`
     display: flex;
     margin-left: 2rem;
     p {
          padding: 0 0.5rem;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid black;
          border-top: 1px solid black;
     }
     button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.4rem;
          font-size: 1rem;
     }
     @media (max-width: 748px) {
          margin: initial;
          p {
               width: 2rem;
               height: 1.5rem;
          }
          button {
               width: 1.5rem;
               height: 1.5rem;
          }
     }
`;

export const Price = styled.div`
     background-color: white;
`;
