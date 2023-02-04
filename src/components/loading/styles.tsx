import styled from "styled-components";

type props = {
     width: string;
     height: string;
};

export const Loading = styled.div<props>`
     width: ${({ width }) => width};
     height: ${({ height }) => height};
     position: absolute;
     top: 45%;
     left: 45%;
     border-radius: 50%;
     background: radial-gradient(farthest-side, red 94%, #0000) top/9px 9px no-repeat, conic-gradient(white 30%, red);
     -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
     animation: spinner-c7wet2 1s infinite linear;
     @keyframes spinner-c7wet2 {
          100% {
               transform: rotate(1turn);
          }
     }
`;