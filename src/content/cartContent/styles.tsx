import styled from "styled-components";

export const MyCart = styled.main`
     width: 100%;
     padding-top: 2rem;
     padding-bottom: 2rem;
     background-color: #e2dada;
`;
export const Content = styled.div`
     width: 80%;
     height: 90vh;
     margin: 0 auto 4rem;
     display: flex;
     overflow: hidden;
     border-radius: 8px;
     background-color: white;
`;
export const ConteinerShopCart = styled.div`
     width: 70%;
     display: flex;
     flex-direction: column;
     padding: 2rem 3rem 0;
     position: relative;
     .topic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #d8d8d8;
     }
     .topicsTable {
          margin-top: 1rem;
          text-transform: uppercase;
          font-size: 0.7rem;
          display: flex;
          color: grey;
          .pd {
               width: 60%;
               text-align: start;
          }
          .quantity {
               width: 20%;
               text-align: center;
          }
          .total {
               width: 20%;
               padding-right: 20px;
               text-align: right;
          }
     }
     .backshopping {
          position: absolute;
          bottom: 7%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: bold;
          color: #888888;
     }
`;
export const ListCart = styled.ul`
     width: 100%;
     height: 72%;
     padding: 1rem 0;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
     overflow-y: scroll;
     ::-webkit-scrollbar {
          width: 1px;
     }
     ::-webkit-scrollbar-track {
          background-color: white;
     }
     ::-webkit-scrollbar-thumb {
          background-color: grey;
     }
     .empty {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
               font-size: 2rem;
          }
          svg {
               font-size: 2rem;
          }
     }
`;

export const Sumary = styled.div`
     width: 30%;
     padding: 2rem 2rem 0;
     background-color: #e0de6ad6;
     background-color: #71889c;
     .topic {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #d8d8d8;
     }
`;
export const ConteinerBuy = styled.div`
     padding: 1rem 0;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
`;
export const InitialPrice = styled.div`
     display: flex;
     justify-content: space-between;
     font-weight: bold;
     text-transform: uppercase;
`;

export const Form = styled.form`
     display: flex;
     flex-direction: column;
     gap: 0.8rem;
     label {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          gap: 1rem;
          justify-content: space-between;
          align-items: flex-start;
          letter-spacing: 2px;
          p {
               font-weight: bold;
               text-transform: uppercase;
          }
          input,
          select {
               width: 100%;
               height: 2rem;
               padding: 0 1rem;
          }
          select {
               font-style: italic;
          }
     }
     .apply {
          width: 40%;
          height: 2.5rem;
          color: white;
          background-color: #d93c2c;
          text-transform: uppercase;
          font-weight: bold;
          border: 1px solid grey;
          &:hover {
               filter: brightness(0.9);
          }
     }
`;
export const TotalCoast = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     border-top: 1px solid grey;
     padding: 2rem 0;
     div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          p {
               text-transform: uppercase;
               font-weight: bold;
               font-size: 0.9rem;
          }
     }
     .checkout {
          width: 100%;
          height: 3rem;
          text-transform: uppercase;
          color: white;
          background-color: #7255b2;
          background-color: #0b64b3;
          border: 1px solid grey;
          &:hover {
               filter: brightness(0.9);
          }
     }
`;
