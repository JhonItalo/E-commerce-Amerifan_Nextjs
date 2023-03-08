import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     height: 35px;
     background-color: #162258;
     position: relative;
     overflow: hidden;
     font-size: 1.3rem;
     color: white;
     display: flex;
     a {
          width: 100%;
          height: 100%;
          pre {
               flex: none;
               height: 100%;
               display: flex;
               align-items: center;
               text-transform: uppercase;
               padding: 0.2rem;
               align-items: center;
               position: absolute;
               left: -150%;
               animation: animate 20s infinite;
               animation-timing-function: linear;
               span {
                    font-weight: bold;
               }
          }
          .second {
               animation-delay: 11s;
          }
          @keyframes animate {
               0% {
                    left: -150%;
                    top: 150%;
               }
               1% {
                    left: -50%;
                    top: 150%;
               }
               2% {
                    left: 100%;
                    top: 100%;
               }
               5% {
                    left: 100%;
                    top: 0;
               }
               100% {
                    left: -150%;
                    top: 0;
               }
          }
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 55px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 40px;
     }
     @media (max-width: 1280px) and (min-width: 1100px) {
          height: 35px;
          font-size: 1.2rem;
     }
`;
