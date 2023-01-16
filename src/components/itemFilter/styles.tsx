import styled from "styled-components";
interface props {
  active: boolean;
}

export const CategoryLi = styled.li<props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e6e6e6;
  .subcategory {
    display: ${({ active }) => (active ? "flex" : "none")};
  }
  @media (max-width: 748px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
`;