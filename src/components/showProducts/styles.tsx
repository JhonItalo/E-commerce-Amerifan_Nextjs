import styled from "styled-components";

export const Conteiner = styled.section`
     width: 88%;
     margin: 2rem auto 3rem;
     display: flex;
     flex-direction: column;
     border-radius: 10px;
     position: relative;
     h2 {
          font-size: 2rem;
          color: #666666;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          max-width: 1200px;
       
     }
`;
export const ConteinerSlide = styled.div`
     width: 100%;
     position: relative;
 
     .btn_slide {
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          color: #0060b1;
          border: none;
          border-radius: 50%;
       
      
          P {
               font-size: 0.5rem;
               position: absolute;
               opacity: 0;
          }
          &:hover {
               background-color: rgba(200,200,200,0.7);
          }
     }
     .next {
          right: -3%;
     }
     .previous {
          left: -4%;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 420px;
     }
`;

export const Slide = styled.div`
     height: 100%;
     padding: 1rem 0 1rem 0.9% ;
     display: flex;
     align-items: center;
     gap: 3.4%;
     overflow-x: hidden;
     scroll-behavior: smooth;   
   
     
`;

export const Error = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 1.5rem;
position: absolute;
top: 0;
left: 0;
`