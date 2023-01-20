import styled from "styled-components";

export const Header = styled.header`
     height: 225px;
     background-color: #000336;
     display: flex;
     flex-direction: column;
`;
export const InitialPromotionSpan = styled.div`
     height: 20%;
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
     height: 55%;
     padding: 0 5rem;

     display: flex;
     align-items: center;
`;
export const MainContent = styled.div`
     flex: none;
     width: 100%;
     height: 55%;
     margin-top: 2rem;
     padding-bottom: 1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #000336;
`;
export const Account = styled.div`
     a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          svg {
               font-size: 2rem;
               color: white;
          }
          p {
               color: white;
               span {
                    font-weight: 700;
               }
          }
     }
`;
