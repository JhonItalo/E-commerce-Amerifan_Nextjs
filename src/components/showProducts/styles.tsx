import styled from "styled-components";

export const Conteiner = styled.section`
     width: 90%;
     height: 435px;
     margin: 3rem auto;
     padding: 1rem;
     display: flex;
     flex-direction: column;
     gap: 1rem;
     border-radius: 10px;
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
          background-color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border: 1px solid grey;
          color: #0f31c9;
          P {
               font-size: 0.5rem;
               position: absolute;
               opacity: 0;
          }
          &:hover {
               border: 1px solid red;
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
