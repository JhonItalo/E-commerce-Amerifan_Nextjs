import styled from "styled-components";

export const Search = styled.div`
     width: 55%;
     height: 100%;
     padding: 0 0.5rem;
     display: flex;
     border-radius: 5px;
     background-color: white;
     position: relative;
     input {
          width: 90%;
          height: 100%;
          padding-left: 0.5rem;
          font-size: 1rem;
          border: none;
          outline: none;
          text-transform: capitalize;
     }
     .iconSearch {
          width: 10%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background-color: inherit;
          cursor: pointer;
          svg {
               font-size: 1.5rem;
               color: grey;
          }
     }
`;
export const ModalSearch = styled.ul`
     width: 60%;
     height: 400px;
     position: absolute;
     top: 101%;
     left: 1%;
     z-index: 1;
     overflow-y: auto;
     a {
          li {
               padding: 0.5rem;
               background-color: white;
               border-top: 1px solid grey;
               text-transform: capitalize;
               &:hover {
                    background-color: #58738b;
                    color: white;
                    font-weight: bold;
               }
          }
     }
`;
export const Atendimento = styled.div`
     position: absolute;
     top: -50%;
     font-size: 0.8rem;
     display: flex;
     justify-content: start;
     align-items: center;
     gap: 2rem;
     color: white;
     //background-color: red;
`;
