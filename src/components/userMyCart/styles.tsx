import styled from "styled-components";

export const MyCart = styled.div`
     width: 100%;
     padding-top: 1rem;
     padding-bottom: 2rem;
     background-color: #e2dada;
`;
export const Content = styled.div`
     width: 80%;
     height: 90vh;
     margin: 0 auto 4rem;
     display: flex;
     overflow: hidden;
     background-color: white;
`;
export const ConteinerShopCart = styled.div`
     width: 70%;
     display: flex;
     flex-direction: column;
     padding: 2rem 2rem 0;
     .topic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          .vazio {
               width: 100%;
               height: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
          }
     }
`;
export const ListCart = styled.ul`
     width: 100%;
     height: 80%;
     margin-top: 1rem;
     padding: 1.5rem 0;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
     border-top: 1px solid grey;
     border-bottom: 1px solid grey;
     overflow-y: scroll;
`;