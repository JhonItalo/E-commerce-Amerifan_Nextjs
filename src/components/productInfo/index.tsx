import React, { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import AccessibleButtonName from "../acessibleButtonName";
import { useRouter } from "next/router";
import { CartContext, contextCartType } from "../../contexts/CartContext";

type props = {
     pokemon: any;
};

const ProductsInfo = ({ pokemon }: props) => {
     console.log("products info render");
     const router = useRouter();
     const [cep, setCep] = useState<string>("");
     const [dataCep, setDataCep] = useState<any>(null);
     const { addToCart } = useContext<contextCartType>(CartContext);
     const [color, setColor] = useState<string>("white");
     const [size, setSize] = useState<string>("s");

     useEffect(() => {
          setColor("white");
          setSize("s");
     }, [router.query.product]);

     const fetchCep = async (cep: string) => {
          const convert = cep.replace(/[^0-9]/g, "");
          const response = await fetch(`https://viacep.com.br/ws/${convert}/json/`).then((r) => r.json());
          setDataCep(response);
     };
     const changeCep = (e: React.FormEvent<HTMLInputElement>) => {
          const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
          setCep(cepMask(value));
     };

     const cepMask = (value: string) => {
          return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1.$2");
     };

     return (
          <S.Conteiner>
               <S.TitleType>
                    <h2 className="title">{pokemon.name}</h2>
                    <div className="type">
                         {pokemon.types.map((pokemon: any) => (
                              <S.ColorType color={pokemon.type.name} key={pokemon.type.name}>
                                   {pokemon.type.name}
                              </S.ColorType>
                         ))}
                    </div>
               </S.TitleType>

               <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer laoreet et
                    libero non viverra. Sed tincidunt lorem eget velit iaculis fringilla. Praesent sit amet interdum urna. Vivamus
                    in fringilla massa. Fusce urna tellus, aliquam et lorem quis, cursus ullamcorper neque. In rutrum cursus enim
                    id facilisis. In tempor est eget magna suscipit, ac mollis enim vehicula.
               </p>

               <S.ColorSelect>
                    <span>Color</span>
                    <div>
                         <button
                              style={{ background: "white", transform: `${color === "white" ? "scale(1.2)" : ""}` }}
                              onClick={() => setColor("white")}
                         >
                              <AccessibleButtonName name="select color white" />
                         </button>
                         <button
                              style={{ background: "#2a258b", transform: `${color === "#2a258b" ? "scale(1.2)" : ""}` }}
                              onClick={() => setColor("#2a258b")}
                         >
                              <AccessibleButtonName name="select color blue" />
                         </button>
                         <button
                              style={{ background: "#628049", transform: `${color === "#628049" ? "scale(1.2)" : ""}` }}
                              onClick={() => setColor("#628049")}
                         >
                              <AccessibleButtonName name="select color green" />
                         </button>
                         <button
                              style={{ background: "#e4e048", transform: `${color === "#e4e048" ? "scale(1.2)" : ""}` }}
                              onClick={() => setColor("#e4e048")}
                         >
                              <AccessibleButtonName name="select color yellow" />
                         </button>
                         <button
                              style={{ background: "#cd491f", transform: `${color === "#cd491f" ? "scale(1.2)" : ""}` }}
                              onClick={() => setColor("#cd491f")}
                         >
                              <AccessibleButtonName name="select color red" />
                         </button>
                    </div>
               </S.ColorSelect>
               <S.SizeSelect>
                    <span>Size</span>
                    <div>
                         <button
                              style={{
                                   background: `${size === "s" ? "#5f9ea0" : ""}`,
                                   color: `${size === "s" ? "white" : "black"}`,
                              }}
                              onClick={() => setSize("s")}
                         >
                              s
                         </button>
                         <button
                              style={{
                                   background: `${size === "m" ? "#5f9ea0" : ""}`,
                                   color: `${size === "m" ? "white" : "black"}`,
                              }}
                              onClick={() => setSize("m")}
                         >
                              m
                         </button>
                         <button
                              style={{
                                   background: `${size === "l" ? "#5f9ea0" : ""}`,
                                   color: `${size === "l" ? "white" : "black"}`,
                              }}
                              onClick={() => setSize("l")}
                         >
                              l
                         </button>
                         <button
                              style={{
                                   background: `${size === "xl" ? "#5f9ea0" : ""}`,
                                   color: `${size === "xl" ? "white" : "black"}`,
                              }}
                              onClick={() => setSize("xl")}
                         >
                              xl
                         </button>
                         <button
                              style={{
                                   background: `${size === "xxl" ? "#5f9ea0" : ""}`,
                                   color: `${size === "xxl" ? "white" : "black"}`,
                              }}
                              onClick={() => setSize("xxl")}
                         >
                              xxl
                         </button>
                    </div>
               </S.SizeSelect>
               <S.Addtocart>
                    <button
                         className="addtocart"
                         onClick={() => addToCart(pokemon.name, pokemon.sprites.other.dream_world.front_default)}
                    >
                         Add to Cart
                    </button>
               </S.Addtocart>
               <S.Frete>
                    <span>Calcule o frete e prazo de entrega</span>
                    <div>
                         <input type="text" onChange={changeCep} value={cep} maxLength={9} placeholder="____-__" />
                         <button onClick={() => fetchCep(cep)}>Consultar</button>
                    </div>
               </S.Frete>
               {dataCep && (
                    <div>
                         <p>
                              {dataCep.cep}, {dataCep.localidade} - {dataCep.uf}
                              {dataCep.bairro && <span> , {dataCep.bairro}</span>}
                              {dataCep.logradouro && <span> - {dataCep.logradouro}</span>}.
                         </p>
                    </div>
               )}
          </S.Conteiner>
     );
};

export default ProductsInfo;
