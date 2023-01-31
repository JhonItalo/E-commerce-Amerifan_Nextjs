import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     height: 130px;
     position: relative;
`;
export const ConteinerSlide = styled.div`
     width: 75%;
     height: 100%;
     margin: 0 auto;
     position: relative;
     .btn_slide {
          border: none;
          background-color: transparent;
          transform: translate(0, -50%);
          position: absolute;
          font-size: 2rem;
          color: white;
          top: 50%;
          cursor: pointer;
     }
     .next {
          right: -5%;
     }
     .previous {
          left: -5%;
     }
`;
export const Slide = styled.div`
     width: 100%;
     height: 100%;
     margin: 0 auto;
     display: flex;
     overflow-x: auto;
     &::-webkit-scrollbar {
          display: none;
     }
     .item {
          flex: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          a {
               position: relative;
          }
     }
`;
