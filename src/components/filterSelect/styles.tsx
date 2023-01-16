import styled from "styled-components";

export const FilterSelect = styled.div`
     width: 25%;
     border-top: 1px solid rgb(230, 230, 230);
     .filtroTitle {
          margin-bottom: 1rem;
          padding: 1rem 0;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: bold;
          border-bottom: 1px solid rgb(230, 230, 230);
     }
     ul {
          li {
               font-size: 2rem;
               border-bottom: 1px solid rgb(230, 230, 230);
          }
     }
`;
export const SubFilter = styled.ul`
     all: unset;
     display: flex;
     flex-direction: column;
     gap: 0.8rem;
     position: relative;
     .itemSub {
          border: none;
          label {
               display: flex;
               justify-content: space-between;
               font-size: 1.2rem;
               border: none;
               div {
                    width: 1rem;
                    height: 1rem;
                    position: relative;
                    input {
                         width: 100%;
                         height: 100%;
                         background-color: inherit;
                         border: none;
                    }
                    p {
                         width: 1.5rem;
                         height: 1.5rem;
                         background-color: transparent;
                         position: absolute;
                    }
               }
          }
     }
`;