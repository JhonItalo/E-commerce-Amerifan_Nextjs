import styled from "styled-components";
type activeButton = {
     active: boolean;
};
type activeImage = {
     active: string;
};

export const Conteiner = styled.div`
     width: 45%;
     height: 500px;
     display: flex;
     align-items: center;
     gap: 4rem;
 
     @media (max-width: 1920px) and (min-width: 1441px) {
       
          overflow: hidden;
          gap: 0rem;
          justify-content: space-between;
     }
  
`;
export const ButtonsSelect = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     button {
          position: relative;
     }
`;
export const Button = styled.div<activeButton>`
     width: 70px;
     height: 70px;
     border: 1px solid ${({ active }) => (active ? "blue" : "black")};
     border-radius: 5px;
`;
export const ConteinerImage = styled.div<activeImage>`
     height: 100%;
     padding: 2rem;
     background-color: ${({ active }) => {
          if (active === "2") {
               return "#ffe4c4";
          } else if (active === "3") {
               return "#d1ffd0 ";
          }
     }};
`;