import styled from "styled-components";
interface propsLi {
     active: boolean;
}

export const Nav = styled.nav`
     height: 25%;
     padding: 0 5rem;
     position: relative;
     background-color: #01022a;
     ul {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
     }
`;

export const Li = styled.li<propsLi>`
     height: 100%;
     a {
          height: 100%;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          p {
               border-bottom: ${({ active }) => (active ? "2px solid #cc0000" : "")};
          }
     }
`;
export const Departments = styled.li`
     height: 100%;
     display: flex;
     align-items: center;
     text-transform: uppercase;
     gap: 0.7rem;
     cursor: default;
     p {
          font-size: 1rem;
     }
     .icone_menu {
          font-size: 1.5rem;
     }
     .icone_arrow {
          font-size: 0.8rem;
     }
     &:hover .modalAllDepartaments {
          display: flex;
     }
`;
