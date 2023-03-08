import styled from "styled-components";

export const Header = styled.header`
     background-color: #000336;
`;
export const InitialPromotionSpan = styled.div`
     height: 45px;
     background-color: black;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 2rem;
     .developer {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-style: italic;
          text-transform: uppercase;
          font-size: 0.8rem;
     }
     div {
          font-size: 1.5rem;
          display: flex;
          gap: 0.5rem;
     }
`;
export const Content = styled.div`
     width: 100%;
     height: 124px;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #000336;
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 150px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 135px;
     }
`;
export const MainContent = styled.div`
     flex: none;
     width: 88%;
     height: 40%;
     margin-top: 1.5rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
`;
