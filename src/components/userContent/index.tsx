import React, { useContext } from "react";
import * as S from "./styles";
import { user } from "../../utils/Constains";
import { SlLogout } from "react-icons/sl";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";

const UserContent = () => {
     const { logout } = useContext<contextAuthUser>(AuthUserContext);
     return (
          <S.Content>
               <p className="title">dados da conta</p>
               <S.Item>
                    <p>e-mail</p>
                    <S.Input readOnly width="40%" value={user.email} type="text" required />
               </S.Item>
               <S.Item>
                    <p>senha</p>

                    <S.Input readOnly width="20%" value={user.senha} type="text" required />
               </S.Item>
               <S.Item>
                    <p>nome completo</p>

                    <S.Input readOnly width="40%" value={user.name} type="text" required />
               </S.Item>
               <S.Item>
                    <p>data de nascimento</p>

                    <S.Input readOnly width="15%" value={user.date} type="text" required />
               </S.Item>

               <S.Item>
                    <p>cpf</p>

                    <S.Input readOnly width="20%" value={user.cpf} type="text" required />
               </S.Item>
               <S.Item>
                    <p>telefone</p>
                    <S.Input readOnly width="20%" value={user.phone} type="text" required />
               </S.Item>
               <button onClick={logout}>
                    <SlLogout />
                    Logout
               </button>
          </S.Content>
     );
};

export default UserContent;
