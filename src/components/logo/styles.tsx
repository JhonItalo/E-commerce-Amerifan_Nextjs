import styled from "styled-components";

export const Conteiner = styled.div`
     height: 100%;
     a {
          position: relative;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          a {
               img {
                    width: 280px;
               }
          }
     }
     @media (max-width: 1280px) and (min-width: 1110px) {
          a {
               img {
                    width: 180px;
               }
          }
     }
`;
