import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
    padding: 0 ;
    margin: 0;
    box-sizing: border-box;
 }
 body{
  overflow-x: hidden;
 }
 ul{
   list-style: none;
 }
 a{
   text-decoration: none;
   &:visited{color: inherit;}
   &:link{color:inherit;}
   &:hover{color:inherit;}
   &:active{color:inherit;}
 }


 @media (max-width: 1920px) and (min-width: 1441px) {
          html{
            font-size: 20px;
          }
     }
   
`;

export default GlobalStyles;