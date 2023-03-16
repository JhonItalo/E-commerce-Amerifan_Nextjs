import styled from "styled-components";
interface propsLi {
     active: boolean;
}

export const Nav = styled.nav`
     width: 100%;
     height: 45px;
     padding: 0 6%;
     position: relative;
     background-color: ${({ theme }) => theme.colors.azul900};
     font-family: "Hind Madurai", sans-serif;
     ul {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 60px;
     }
     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 50px;
     }
`;

export const Li = styled.li<propsLi>`
     height: 100%;
     a {
          height: 100%;
          font-size: 1rem;
          display: flex;
          align-items: center;
          p {
               border-bottom: ${({ active }) => (active ? "2px solid #cc0000" : "")};
          }
     }
`;
export const Departments = styled.li`
     height: 100%;
     display: flex;
     align-items: center;
     gap: 0.7rem;
     cursor: default;
     font-weight: bold;
     p {
          font-size: 1rem;
     }
     .icone_menu {
          font-size: 1.5rem;
     }
     .icone_arrow {
          font-size: 0.6rem;
     }
     &:hover .modalAllDepartaments {
          display: flex;
     }
`;
