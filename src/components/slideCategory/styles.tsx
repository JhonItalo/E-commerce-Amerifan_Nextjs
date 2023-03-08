import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     height: 120px;
     position: relative;
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 150px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 130px;
     }
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
               @media (max-width: 1920px) and (min-width: 1441px) {
                    img {
                         width: 130px;
                         height: 130px;
                    }
                    .ball {
                         width: 110px;
                         height: 110px;
                    }
               }
          }
     }
`;
