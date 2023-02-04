import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;

     padding: 4rem 0rem 5rem;
     background-color: white;

     h2 {
          text-align: center;
          font-size: 3.5rem;
     }
     .subTitle {
          margin-top: 0.5rem;
          display: block;
          text-align: center;
          color: rgba(0, 0, 0, 0.7);
          font-weight: 600;
     }
`;
export const inputResults = styled.div`
     width: 50%;
     margin: 25px auto 0;
     position: relative;

     .conteinerinput {
          width: 100%;
          height: 35px;
          margin-top: 2rem;
          display: flex;
          border-radius: 5px;
          border: 1px solid black;
          background-color: white;
          overflow: hidden;
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
               background-color: #0060b1;
               svg {
                    font-size: 1.5rem;
                    color: white;
               }
          }
     }
     .conteinerResults {
          min-height: 200px;
          position: relative;

          .foundresults {
               width: 100%;
               margin-top: 2rem;
               font-size: 1.5rem;
               display: block;
               text-align: center;
          }
          .results {
               width: 100%;
               max-height: 300px;
               margin-top: 2rem;
               align-items: center;
               display: flex;
               flex-direction: column;
               gap: 1rem;
               overflow: auto;

               a {
                    display: block;

                    text-transform: capitalize;
               }
          }
     }
`;
