import styled from "styled-components";

export const Content = styled.main`
     display: block;
     width: 600px;
     margin: 0 auto;
     margin-top: 5rem;
     margin-bottom: 5rem;
     padding: 0 1rem;
     text-align: center;
     font-size: 1rem;
     font-family: Arial, Helvetica, sans-serif;
     color: rgb(102, 102, 102);
     .title {
          font-size: 2.2rem;
          font-weight: bold;
     }
     .subtitle {
          display: block;
          margin-top: 1rem;
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
     }
`;

export const Failure = styled.div`
     display: flex;
     width: 100%;
     height: 50px;
     margin-top: 2rem;
     padding-left: 0.8rem;
     align-items: center;
     gap: 0.8rem;
     border-radius: 5px;
     font-size: 1rem;
     font-weight: bold;
     background-color: rgb(255, 235, 238);
     svg {
          font-size: 1.5rem;
          color: #630404;
     }
`;

export const Form = styled.div`
     margin-top: 2.5rem;
     color: rgb(102, 102, 102);
     span {
          color: red;
     }
     .legend {
          margin-top: 0.4rem;
          font-size: 0.9rem;
          color: rgb(153, 153, 153);
     }
     button {
          width: 90%;
          height: 50px;
          margin-top: 3rem;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          outline: none;
          color: white;
          background-color: #0060b1;
          cursor: pointer;
     }
`;

export const Item = styled.label`
     display: block;
     width: 100%;
     margin-top: 1.5rem;
     text-align: start;
`;

export const ItemGenre = styled.div`
     width: 100%;
     text-align: start;
     margin-top: 1.5rem;
     .legend {
          margin-top: 0.4rem;
          font-size: 0.9rem;
          color: rgb(153, 153, 153);
     }
     .radios {
          margin-top: 0.8rem;
          margin-right: 1rem;
          display: inline-flex;
          align-items: center;
          input {
               margin-right: 0.5rem;
               width: 1.5rem;
               height: 1.5rem;
          }
     }
`;

export const ItemSenha = styled.label`
     display: block;
     width: 100%;
     margin-top: 1.5rem;
     text-align: start;
     div {
          width: 40%;
          height: 50px;
          margin-top: 0.5rem;
          position: relative;
          svg {
               position: absolute;
               top: 50%;
               right: 5%;
               font-size: 1.5rem;
               transform: translate(0, -50%);
          }
     }
`;

type propsInput = {
    
     width?: string;
};
export const Input = styled.input`
     width: ${({ width }) => width};
     height: 50px;
     margin-top: 0.5rem;
     padding: 1rem;
     font-size: 1rem;
     border-radius: 8px;
     outline: none;
`;

export const InputSenha = styled.input<propsInput>`
     width: 100%;
     height: 100%;
     padding: 1rem;
     padding-right: 3rem;
     border-radius: 8px;
     outline: none;
`;