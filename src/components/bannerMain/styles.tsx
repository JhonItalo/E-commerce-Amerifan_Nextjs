import styled from "styled-components";

export const Banner = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;

     .whiteRow {
          width: 95%;
          height: 3rem;
          margin: 5rem auto 3rem;

          padding: 1rem;
          border-radius: 10px;
          background-color: white;
     }
`;
export const ConteinerSlide = styled.div`
     width: 100%;
     height: 550px;
     position: relative;
     .btn_slide {
          width: 2rem;
          height: 2rem;
          font-size: 3rem;
          color: white;
          position: absolute;
          top: 50%;
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
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 700px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 600px;
     }
     @media (max-width: 1280px) and (min-width: 1100px) {
          height: 500px;
     }
`;

export const Slide = styled.div`
     width: 100%;
     height: 100%;
     margin: 0 auto;
     display: flex;
     overflow-y: hidden;
     overflow-x: auto;
     scroll-behavior: smooth;
     color: white;
     a {
          flex: none;
          width: 100%;
          height: 100%;
          position: relative;
          img {
               object-fit: cover;
          }
     }
     &::-webkit-scrollbar {
          display: none;
     }
`;
export const Radios = styled.div`
     width: 20%;
     height: 1.5rem;
     position: absolute;
     left: 50%;
     bottom: -7%;
     transform: translate(-50%, 0);

     padding: 0 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.5rem;
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
