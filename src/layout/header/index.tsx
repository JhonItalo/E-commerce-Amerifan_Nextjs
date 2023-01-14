import Link from "next/link";
import * as S from "./styles";
import Nav from "../nav";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
     console.log("header render");
     return (
          <S.Header>
               <S.InitialPromotionSpan></S.InitialPromotionSpan>
               <S.Content>
                    <S.Atendimento>
                         <Link href="/telefonia">Chame o vendedor</Link>
                         <Link href="/telefonia">Atendimento</Link>
                         <Link href="/telefonia">Lista de Presents</Link>
                    </S.Atendimento>

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
