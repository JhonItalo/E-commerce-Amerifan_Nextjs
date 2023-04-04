import styled from "styled-components";
export const Teste = styled.div`
     width: 90%;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     a {
          width: 45%;
          height: 220px;
          padding: 2rem;
          border: 2px solid white;
          border-radius: 20px;
          background-image: url("/assets/banner/backBannerSecondary.webp");
          background-size: cover;
          background-position: center;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          max-width: 1200px;
     }
`;
