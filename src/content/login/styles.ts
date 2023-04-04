import styled from "styled-components";

type contentprops = {
     failure: boolean;
};
export const Content = styled.div<contentprops>`
     width: 350px;
     padding-bottom: 5rem;
     margin: 0 auto;
     margin-top: 4rem;
     text-align: center;
     font-size: 1rem;
     color: rgb(102, 102, 102);
     .title {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.7rem;
          font-weight: 600;
          letter-spacing: 1px;
     }
     .subtitle {
          margin-top: 1.5rem;
          font-size: 1rem;
     }
     .failure {
          display: ${({ failure }) => (failure ? "flex" : "none")};
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
     }
     .register {
          margin-top: 1.5rem;
          a {
               text-decoration: underline;
          }
     }
     .politicprivacy {
          margin-top: 1.5rem;
          a {
               text-decoration: underline;
          }
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          width: 450px;
     }
`;
type propsForm = {
     activeEmail: boolean | null;
     activeSenha: boolean | null;
};
export const Form = styled.form<propsForm>`
     width: 100%;
     margin-top: 1.5rem;
     padding: 0 0.2rem;
     label {
          margin-bottom: 1.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          span {
               color: rgb(209, 46, 56);
          }
          input {
               width: 100%;
               height: 50px;
               padding: 1rem 0.8rem;
               font-size: 0.9rem;
               border: ${({ activeEmail }) => {
                    if (activeEmail === null) {
                         return "1px solid gray";
                    } else if (activeEmail) {
                         return "1px solid green";
                    } else if (activeEmail === false) {
                         return "1px solid red";
                    }
               }};
               border-radius: 7px;
               outline: none;
          }
          .senhaTopicLabel {
               width: 100%;
               display: flex;
               justify-content: space-between;
               align-items: center;
          }
          .senhaInput {
               width: 100%;
               display: flex;
               align-items: center;
               position: relative;
               border: ${({ activeSenha }) => {
                    if (activeSenha === null) {
                         return "1px solid gray";
                    } else if (activeSenha) {
                         return "1px solid green";
                    } else if (activeSenha === false) {
                         return "1px solid red";
                    }
               }};
               border-radius: 7px;
               input {
                    width: 100%;
                    border: none;
               }
               svg {
                    position: absolute;
                    top: 50%;
                    right: 5%;
                    font-size: 1.5rem;
                    transform: translate(0, -50%);
               }
          }
     }
     button {
          width: 100%;
          height: 50px;
          margin-top: 0.5rem;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          color: white;
          background-color: #0060b1;
          cursor: pointer;
     }
`;
type propsInvalid = {
     active: boolean;
};
export const Invalid = styled.span<propsInvalid>`
     display: ${({ active }) => (active ? "block" : "none")};
     color: rgb(209, 46, 56);
`;
export const Modal = styled.div`
     width: 200px;
     padding: 1rem;
     border: 1px solid grey;
     border-radius: 5px;
     position: absolute;
     top: 80%;
     left: 1%;
     @media (max-width: 1920px) and (min-width: 1441px) {
          top: 40%;
     }
`;