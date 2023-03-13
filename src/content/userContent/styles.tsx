import styled from "styled-components";

export const Content = styled.div`
     display: block;
     width: 70%;
     margin: 0 auto;
     padding: 2rem;
     position: relative;
     color: rgb(102, 102, 102);
     background-color: white;
     border-radius: 8px;

     .title {
          font-size: 1.5rem;
          font-weight: bold;
     }
     button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          position: absolute;
          top: 5%;
          right: 5%;
          border: none;
          outline: none;
          cursor: pointer;
          background-color: transparent;
          svg {
               font-size: 1.5rem;
               color: #0060b1;
          }
     }
`;
export const Item = styled.label`
     display: block;
     width: 100%;
     margin-top: 1.5rem;
     text-align: start;
     color: rgb(102, 102, 102);
     p {
          font-size: 1.1rem;
     }
`;

type propsInput = {
     width: string;
};
export const Input = styled.input<propsInput>`
     width: ${({ width }) => width};
     height: 40px;
     margin-top: 0.5rem;
     padding: 1rem;
     font-size: 1rem;
     border-radius: 8px;
     border: 1px solid gray;
     outline: none;
     color: grey;
     background-color: rgb(241, 241, 241);
`;
