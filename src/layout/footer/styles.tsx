import styled from "styled-components";

export const Footer = styled.div`
     width: 100%;
     height: 400px;
     padding: 3rem;
     display: flex;
     justify-content: space-around;
     background-color: #e8e8e8;
     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 550px;
     }
`;
export const Item = styled.div`
     width: 200px;
     height: 300px;
     display: flex;
     flex-direction: column;
     gap: 1rem;
     .title {
          color: #c11a26;
          font-weight: bold;
          font-size: 1rem;
     }
     p {
          font-size: 0.9rem;
          color: #575757;
     }
`;
export const ItemComposto = styled.div`
     width: 200px;
     height: 300px;
     div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
          .title {
               color: #c11a26;
               font-weight: bold;
               font-size: 1rem;
          }
          p {
               font-size: 0.9rem;
               color: #575757;
          }
          a {
               position: relative;
          }
     }
     .redesSociais {
          margin-top: 2rem;
          .icons {
               display: flex;
               flex-direction: row;
               justify-content: flex-start;
               gap: 1rem;
               a {
                    position: relative;
                    svg {
                         font-size: 2rem;
                         color: #007ac2;
                    }
               }
          }
     }
`;
