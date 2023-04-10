import * as S from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import ModalAllDepartaments from "../../components/modalAllDepartaments";

const Nav = () => {
  
     const { asPath: pathname } = useRouter();
     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Nav>
                         <ul>
                              <S.Departments>
                                   <AiOutlineMenu className="icone_menu" />
                                   <p>Departamentos</p>
                                   <SlArrowDown className="icone_arrow" />
                                   <ModalAllDepartaments />
                              </S.Departments>

                              <S.Li>
                                   <Link href="/telefonia">
                                        <p className={pathname === "/telefonia" ? "active" : ""}>Telefonia</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link href="/smartphones">
                                        <p className={pathname === "/smartphones" ? "active" : ""}>Smartphones</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link href="/eletrodomesticos">
                                        <p className={pathname === "/eletrodomesticos" ? "active" : ""}>Eletrodomésticos</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link href="/moveis">
                                        <p className={pathname === "/moveis" ? "active" : ""}>Movéis</p>
                                   </Link>
                              </S.Li>

                              <S.Li>
                                   <Link href="/tvevideo">
                                        <p className={pathname === "/tvevideo" ? "active" : ""}>Tv e vídeo</p>
                                   </Link>
                              </S.Li>

                              <S.Li>
                                   <Link href="/">
                                        <p className={pathname === "/eletroportateis" ? "active" : ""}>Eletroportáteis</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link href="/">
                                        <p className={pathname === "/informatica" ? "active" : ""}>Informática</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link href="/">
                                        <p className={pathname === "/servicos" ? "active" : ""}>Serviços</p>
                                   </Link>
                              </S.Li>
                         </ul>
                    </S.Nav>
               )}
          </>
     );
};

export default Nav;
