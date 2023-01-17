import React, { useState } from "react";
import * as S from "./styles";
import ButtonAddCart from "../buttonAddCart/index";
import AccessibleButtonName from "../acessibleButtonName";

type props = {
     pokemon: any;
};

const ProductsInfo = ({ pokemon }: props) => {
     console.log("products info render");
     const [color, setColor] = useState<string>("white");
     const [size, setSize] = useState<string>("s");

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
                              style={{ background: "white", border: `${color === "white" ? "1px solid black" : ""}` }}
                              onClick={() => setColor("white")}
                         >
                              <AccessibleButtonName name="select color white" />
                         </button>
                         <button
                              style={{ background: "blue", border: `${color === "blue" ? "1px solid black" : ""}` }}
                              onClick={() => setColor("blue")}
                         >
                              <AccessibleButtonName name="select color blue" />
                         </button>
                         <button
                              style={{ background: "green", border: `${color === "green" ? "1px solid black" : ""}` }}
                              onClick={() => setColor("green")}
                         >
                              <AccessibleButtonName name="select color green" />
                         </button>
                         <button
                              style={{ background: "yellow", border: `${color === "yellow" ? "1px solid black" : ""}` }}
                              onClick={() => setColor("yellow")}
                         >
                              <AccessibleButtonName name="select color yellow" />
                         </button>
                         <button
                              style={{ background: "red", border: `${color === "red" ? "1px solid black" : ""}` }}
                              onClick={() => setColor("red")}
                         >
                              <AccessibleButtonName name="select color red" />
                         </button>
                    </div>
               </S.ColorSelect>
               <S.SizeSelect>
                    <span>Size</span>
                    <div>
                         <button style={{ background: `${size === "s" ? "#f0e68c" : ""}` }} onClick={() => setSize("s")}>
                              s
                         </button>
                         <button style={{ background: `${size === "m" ? "#f0e68c" : ""}` }} onClick={() => setSize("m")}>
                              m
                         </button>
                         <button style={{ background: `${size === "l" ? "#f0e68c" : ""}` }} onClick={() => setSize("l")}>
                              l
                         </button>
                         <button style={{ background: `${size === "xl" ? "#f0e68c" : ""}` }} onClick={() => setSize("xl")}>
                              xl
                         </button>
                         <button style={{ background: `${size === "xxl" ? "#f0e68c" : ""}` }} onClick={() => setSize("xxl")}>
                              xxl
                         </button>
                    </div>
               </S.SizeSelect>
               <S.Addtocart>
                    <ButtonAddCart name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default}>
                         Add to Cart
                    </ButtonAddCart>
               </S.Addtocart>
               <S.Frete>
                    <span>Calcule o frete e prazo de entrega</span>
                    <div>
                         <input type="text" placeholder="____-__" />
                         <button>Consultar</button>
                    </div>
               </S.Frete>
          </S.Conteiner>
     );
};

export default ProductsInfo;
