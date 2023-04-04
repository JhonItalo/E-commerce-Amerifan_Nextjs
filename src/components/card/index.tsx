import Link from "next/link";
import AccessibleName from "../acessibleLinkName";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext, contextCartType } from "../../contexts/CartContext";
import { pokemonInfo } from "../../types/types";

import Image from "next/image";

type props = {
     pokemon: pokemonInfo | undefined;
     width: string;
};

const Card = ({ pokemon, width }: props) => {
     const { addToCart } = useContext<contextCartType>(CartContext);
     return (
          <S.Conteiner width={width} className="controlParentStyle">
               {pokemon && (
                    <>
                         <Link href={`/products/${pokemon.name}`}>
                              <Image src={pokemon.image} alt={pokemon.name} width={130} height={158} priority />
                              <AccessibleName name={pokemon.name} />
                         </Link>
                         <div className="info">
                              <p className="name">{pokemon.name}</p>
                              <div className="type">
                                   {pokemon.types.map((type: string) => (
                                        <S.Type color={type} key={type}>
                                             {type}
                                        </S.Type>
                                   ))}
                              </div>
                         </div>

                         <button
                              className="addtocart"
                              onClick={() => {
                                   addToCart(pokemon.name, pokemon.image);
                              }}
                         >
                              Add to Cart
                         </button>
                    </>
               )}
          </S.Conteiner>
     );
};

export default Card;
