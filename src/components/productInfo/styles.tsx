import styled from "styled-components";
import { colorTypes } from "../../utils/Constains";

type colorType = {
     color: string;
};

export const Conteiner = styled.div`
     width: 55%;
     padding-top: 1rem;
     display: flex;
     flex-direction: column;
     gap: 1rem;
`;
export const TitleType = styled.div`
     display: flex;
     align-items: center;
     gap: 2rem;
     .title {
          text-transform: capitalize;
     }
     .type {
          display: flex;
          gap: 1rem;
     }
`;
export const ColorType = styled.span<colorType>`
     padding: 0.5rem 2rem;
     border-radius: 5px;
     color: white;
     background-color: ${({ color }) => {
          return colorTypes[color];
     }};
     text-transform: uppercase;
`;
export const ColorSelect = styled.div`
     div {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
          button {
               padding: 0.8rem;
               border: 1px solid grey;
               position: relative;
               cursor: pointer;
               border-radius: 5px;
          }
     }
`;

export const SizeSelect = styled.div`
     div {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
          button {
               text-transform: uppercase;
               padding: 0.9rem;
               border: 1px solid grey;
               background-color: transparent;
               cursor: pointer;
          }
     }
`;
export const Addtocart = styled.div`
     padding: 1rem;
     width: 50%;
     margin: 0 auto;
     align-items: center;
     button {
          width: 100%;
          height: 50px;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          background-color: black;
          color: white;
          cursor: pointer;
          &:hover {
               border: 1px solid black;
               background-color: white;
               color: black;
          }
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          width: 35%;
     }
`;
export const Frete = styled.div`
     height: 80px;
     padding: 0 1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #fffbe9;
     span {
          font-size: 1.2rem;
          font-weight: bold;
          color: #10797e;
     }
     div {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1rem;
          input {
               width: 50%;
               height: 60%;
               padding-left: 1rem;
               font-size: 1rem;
               border-radius: 5px;
               border: 1px solid grey;
          }
          button {
               height: 60%;
               padding: 1rem 1.5rem;
               display: flex;
               align-items: center;
               font-size: 1rem;
               font-weight: bold;
               border-radius: 5px;
               border: none;
               background-color: #134354;
               color: white;
          }
     }
`;
