import styled from "styled-components";

export const Item = styled.li`
     flex: none;
     display: flex;
     align-items: center;
     height: 100px;
`;
export const ConteinerInfo = styled.div`
     width: 60%;
     height: 100%;
     display: flex;
     gap: 1rem;
     align-items: center;
     div {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          .title {
               font-size: 1.5rem;
               letter-spacing: 4px;
          }
          button {
               border: none;
               background-color: transparent;
               color: grey;
               font-size: 0.8rem;
          }
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          img {
               width: 90px;
               height: 90px;
          }
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          img {
               width: 80px;
               height: 80px;
          }
     }
`;

export const CountPrice = styled.div`
     width: 20%;
     display: flex;
     justify-content: center;
     p {
          padding: 5px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid grey;
     }
     button {
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.4rem;
          font-size: 1rem;
          background-color: transparent;
          border: none;
     }
`;

export const Price = styled.div`
     width: 20%;
     padding-right: 25px;
     text-align: right;
`;