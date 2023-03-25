import styled from "styled-components";
export const Conteiner = styled.div`
     width: 95%;
     height: 85px;
     margin: 5rem auto 0;
     padding: 0 3rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #8b8b8b;

     p {
          font-weight: bold;
          color: white;
          font-size: 1.3rem;
     }
     .inputs {
          height: 45%;
          width: 25%;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: start;
          border-radius: 5px;
          background-color: white;
          overflow: hidden;
          span {
               width: 20%;
               height: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               color: #575757;
               background-color: #e8e8e8;
          }
          input {
               width: 79.5%;
               height: 95%;
               padding-left: 1rem;
               border: none;
               border-radius: 5px;
               background-color: white;
          }
     }
     button {
          height: 45%;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 5px;
          text-transform: uppercase;
          padding: 0rem 2rem;
          background-color: #f9bd00;
          border: none;
          cursor: pointer;
     }
`;
