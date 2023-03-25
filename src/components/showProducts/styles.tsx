import styled from "styled-components";

export const Conteiner = styled.section`
     width: 95%;
     height: 435px;
     margin: 3rem auto;
     padding: 1rem 2rem;
     display: flex;
     flex-direction: column;
     gap: 1rem;
     border-radius: 25px;
     position: relative;
     background-image: url("/assets/background/SPbackground.webp");
     h2 {
          font-size: 2rem;
          color: white;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          max-width: 1500px;
          height: 500px;
     }
`;
export const ConteinerSlide = styled.div`
     width: 100%;
     height: 350px;
     position: relative;
     .btn_slide {
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          color: white;
          border: none;
          border-radius: 50%;
          background-color: transparent;
          P {
               font-size: 0.5rem;
               position: absolute;
               opacity: 0;
          }
          &:hover {
               background-color: #3b35357d;
          }
     }
     .next {
          right: -3%;
     }
     .previous {
          left: -3%;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 420px;
     }
`;

export const Slide = styled.div`
     height: 100%;
     display: flex;
     gap: 2.5%;
     overflow-x: hidden;
     scroll-behavior: smooth;
`;
