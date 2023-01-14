import * as S from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import ModalAllDepartaments from "../../components/modalAllDepartaments";

const Nav = () => {
     console.log("nave render");
     const { asPath: pathname } = useRouter();
     return (
          <S.Nav>
               <ul>
                    <S.Departments>
                         <AiOutlineMenu className="icone_menu" />
                         <p>Departamenhrefs</p>
                         <SlArrowDown className="icone_arrow" />
                         <ModalAllDepartaments />
                    </S.Departments>

                    <S.Li active={pathname === "/telefonia"}>
                         <Link href="/telefonia">
                              <p>Telefonia</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/smartphones"}>
                         <Link href="/smartphones">
                              <p>Smartphones</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/eletrodomesticos"}>
                         <Link href="/eletrodomesticos">
                              <p>Eletrodomésticos</p>
                         </Link>
                    </S.Li>

                    <S.Li active={pathname === "/videotv"}>
                         <Link href="/videotv">
                              <p>Tv e vídeo</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/moveis"}>
                         <Link href="/moveis">
                              <p>Movéis</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/eletroportateis"}>
                         <Link href="/eletroportateis">
                              <p>EletroPortáteis</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/informatica"}>
                         <Link href="/informatica">
                              <p>Informática</p>
                         </Link>
                    </S.Li>
                    <S.Li active={pathname === "/servicos"}>
                         <Link href="/servicos">
                              <p>Serviços</p>
                         </Link>
                    </S.Li>
               </ul>
          </S.Nav>
     );
};

export default Nav;
