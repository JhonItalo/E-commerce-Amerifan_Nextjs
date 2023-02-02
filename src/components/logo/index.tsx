import * as S from "./styles";
import Link from "next/link";


const Logo = () => {
     console.log("logo render");
     return (
          <S.Conteiner>
               <Link href="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="90%" width="200px" />
               </Link>
          </S.Conteiner>
     );
};

export default Logo;
