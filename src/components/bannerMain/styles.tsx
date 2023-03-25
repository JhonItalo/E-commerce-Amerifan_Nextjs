import styled from "styled-components";

export const Banner = styled.div`
     width: 94%;
     margin: 2rem auto 0;
     display: flex;
     flex-direction: column;
`;
export const ConteinerSlide = styled.div`
     width: 100%;
     position: relative;
     padding-bottom: 2.5rem;
     .btn_slide {
          width: 2rem;
          height: 2rem;
          font-size: 2.5rem;
          color: white;
          position: absolute;
          top: calc(50% - 2.5rem);
          border: none;
          transform: translate(0, -50%);
          background-color: transparent;
          cursor: pointer;
     }
     .previous {
          left: 7%;
     }
     .next {
          right: 7%;
     }
`;

export const Slide = styled.div`
     width: 100%;
     height: 400px;
     display: flex;
     overflow-y: hidden;
     overflow-x: auto;
     scroll-behavior: smooth;
     color: white;
     a {
          display: block;
          flex: none;
          width: 100%;
          height: 100%;
          img {
               width: 100%;
               height: 100%;
               object-fit: cover;
          }
     }
     &::-webkit-scrollbar {
          display: none;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 450px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 420px;
     }
`;
export const Radios = styled.div`
     height: 1.5rem;
     padding: 0 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.5rem;
     position: absolute;
     left: 50%;
     bottom: 0;
     transform: translate(-50%, 0);
     border-radius: 20px;
     background-color: #e6e1e1;
     button {
          padding: 0.4rem;
          border: none;
          border-radius: 50%;
          background-color: #c7c2c2;
          position: relative;
          &:hover {
               border: 1px solid blue;
          }
     }
`;
