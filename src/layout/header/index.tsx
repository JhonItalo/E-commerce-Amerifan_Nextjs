import Link from "next/link";
import * as S from "./styles";
import Nav from "../nav";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { HiOutlineUser } from "react-icons/hi";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Header = () => {
     console.log("header render");
     return (
          <S.Header>
               <S.InitialPromotionSpan>
                    <p className="developer">Developer by John Ítalo Lima Lima</p>
                    <div>
                         <Link href="https://www.linkedin.com/in/johnitalodev/" target="_blank">
                              <AiFillLinkedin />
                         </Link>
                         <Link href="https://github.com/JhonItalo" target="_blank">
                              <AiFillGithub />
                         </Link>
                    </div>
               </S.InitialPromotionSpan>
               <S.Content>
                    <S.MainContent>
                         <Logo />
                         <Search />
                         <S.Account>
                              <Link href="/telefonia">
                                   <HiOutlineUser />
                                   <p>
                                        <span>Entre ou Cadastre-se</span> <br /> para ver seus pedidos
                                   </p>
                              </Link>
                         </S.Account>
                         <Cart />
                    </S.MainContent>
               </S.Content>
               <Nav />
          </S.Header>
     );
};

export default Header;
