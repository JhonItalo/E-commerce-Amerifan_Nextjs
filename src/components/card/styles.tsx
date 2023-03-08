import styled from "styled-components";
import { colorTypes } from "../../utils/Constains";

type propsConteiner = {
     width: string;
};

export const Conteiner = styled.div<propsConteiner>`
     flex: none;
     width: ${({ width }) => width};
     height: 350px;
     padding: 1rem 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 16px;
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(4.4px);
     -webkit-backdrop-filter: blur(4.4px);
     background: rgba(255, 255, 255, 0.24);
     border: 1px solid rgba(255, 255, 255, 0.3);
     &:hover {
          border: 1px solid white;
     }
     .info {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          .name {
               text-transform: uppercase;
          }
          .type {
               display: flex;
               gap: 0.5rem;
               font-size: 0.9rem;
          }
     }
     .addtocart {
          margin-top: 2rem;
          padding: 0.5rem;
          border: none;
          border-radius: 5px;
          background-color: white;
          font-weight: bold;
          border: 1px solid black;
          cursor: pointer;
          &:hover {
               background-color: black;
               color: white;
          }
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          width: 260px;
          height: 100%;
          a {
               img {
                    width: 160px;
                    height: 160px;
               }
          }
     }
     @media (max-width: 1280px) and (min-width: 1100px) {
          width: 220px;
          height: 330px;
          a {
               img {
                    width: 120px;
                    height: 140px;
               }
          }
     }
`;

interface propsType {
     color: string;
}
export const Type = styled.p<propsType>`
     padding: 0.5rem;
     color: white;
     background-color: ${({ color }) => {
          return colorTypes[color];
     }};
     text-transform: uppercase;
`;
