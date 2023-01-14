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
`;
export const Content = styled.div`
     width: 100%;
     height: 55%;
     padding: 0 5rem;
`;
export const Atendimento = styled.div`
     width: 100%;
     height: 40%;
     padding-left: 20%;
     font-size: 0.8rem;
     display: flex;
     align-items: center;
     gap: 1.5rem;
     color: white;
`;
export const MainContent = styled.div`
     width: 100%;
     height: 55%;
     padding-bottom: 1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     //background-color: #0060b1;
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
