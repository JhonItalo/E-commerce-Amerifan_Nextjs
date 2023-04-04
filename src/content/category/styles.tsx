import styled from "styled-components";

export const ProductsByCategory = styled.main`
     background-color: white;
     padding: 3rem 4rem;
     h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
          text-transform: capitalize;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          padding: unset;
          max-width: 1200px;
          margin: 2rem auto;
       
     }
`;

export const Content = styled.div`
     display: flex;
     padding-top: 1rem;
     justify-content: space-between;
     background-color: white;
`;