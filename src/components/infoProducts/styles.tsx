import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     //height: 500px;
     padding: 1rem;
     border-radius: 5px;
     display: flex;
     gap: 2rem;
     background-color: white;
     // background-color: grey;
`;
export const Describe = styled.section`
     // margin-top: 2rem;
     h3 {
          margin-bottom: 1rem;
     }
     background-color: white;
`;

export const TechnicalInformation = styled.section`
     margin-top: 2rem;
     margin-bottom: 4rem;
     h3 {
          margin-bottom: 1rem;
     }
     table {
          width: 100%;
          border: 1px solid black;
          caption {
               background-color: beige;
          }
          thead {
               background-color: grey;
               tr {
                    th {
                         border: 1px solid black;
                    }
               }
          }
          tbody {
               tr {
                    border-left: 1px solid black;
                    td {
                         border: 1px solid black;
                    }
               }
          }
     }
`;