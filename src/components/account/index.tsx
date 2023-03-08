import * as S from "./styles";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import { useContext } from "react";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Account = () => {
     const router = useRouter();
     const { token } = useContext<contextAuthUser>(AuthUserContext);

     return (
          <S.Account>
               {token ? (
                    <div className="user" onClick={() => router.push("/user")}>
                         <FaRegUserCircle />
                         <p className="title">
                              <span>
                                   Olá, user <br />
                              </span>
                              <span>minha conta</span>
                         </p>
                         <MdKeyboardArrowDown style={{ fontSize: "1.2rem", marginTop: "0.7rem" }} />
                    </div>
               ) : (
                    <>
                         <div className="account">
                              <HiOutlineUser />
                              <p>
                                   <span>Entre ou Cadastre-se</span> <br /> para ver seus pedidos
                              </p>
                         </div>
                         <div className="modalLogin">
                              <div>
                                   <button onClick={() => router.push("/login")}>Faça seu login</button>
                                   <span>Ainda não possui cadastro?</span>
                                   <Link href="/register">Cadastre-se aqui</Link>
                              </div>
                         </div>
                    </>
               )}
          </S.Account>
     );
};

export default Account;
