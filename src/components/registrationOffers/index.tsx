import * as S from "./styles";

const RegistrationOffers = () => {
     return (
          <S.Conteiner>
               <p>Cadastre-se para receber nossas ofertas!</p>

               <label className="inputs">
                    <span>Name</span>
                    <input type="text" placeholder="Digite seu nome" />
               </label>

               <label className="inputs">
                    <span> E-mail</span>

                    <input type="text" placeholder="Digite seu e-mail" />
               </label>

               <button>Cadastrar</button>
          </S.Conteiner>
     );
};

export default RegistrationOffers;
