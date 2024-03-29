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
`;

export default GlobalStyles;