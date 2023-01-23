import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

type props = {
     pokemon: any;
};

const Card = ({ pokemon }: props) => {
     const { addToCart } = useContext(CartContext);
     return (
          <S.Conteiner style={{ flex: "none" }} className="controlParentStyle">
               <Link href={`/products/${pokemon.name}`}>
                    <Image src={pokemon.image} alt={pokemon.name} width={140} height={158} priority />
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

               <button className="addtocart" onClick={() => addToCart(pokemon.name, pokemon.image)}>
                    Add to Cart
               </button>
          </S.Conteiner>
     );
};

export default Card;
