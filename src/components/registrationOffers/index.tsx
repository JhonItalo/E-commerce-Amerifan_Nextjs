import * as S from "./styles";
import { toast } from "react-toastify";
import { useState } from "react";

const RegistrationOffers = () => {
     const [name, setName] = useState<string>("");
     const [email, setEmail] = useState<string>("");

     const changeName = (e: React.FormEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
     };

     const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
     };
     const verifyInputs = () => {
          if (name.length > 0 && email.length > 0) {
               toast.info("Cadastro realizado com sucesso");
          } else {
               toast.warn("Verifique os campos vazios");
          }
     };

     return (
          <S.Conteiner>
               <p>Cadastre-se para receber nossas ofertas!</p>

               <label className="inputs">
                    <span>Name</span>
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={changeName} />
               </label>

               <label className="inputs">
                    <span> E-mail</span>

                    <input type="text" placeholder="Digite seu e-mail" value={email} onChange={changeEmail} />
               </label>

               <button onClick={verifyInputs}>Cadastrar</button>
          </S.Conteiner>
     );
};

export default RegistrationOffers;
