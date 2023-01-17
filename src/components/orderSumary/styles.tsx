import styled from "styled-components";

export const Sumary = styled.div`
     width: 30%;
     padding: 2rem 2rem 0;
     background-color: #e0de6ad6;
`;
export const ConteinerBuy = styled.div`
     margin-top: 1rem;
     padding: 1rem 0;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
     border-top: 1px solid grey;
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
          border: 1px solid grey;
          &:hover {
               filter: brightness(0.9);
          }
     }
`;