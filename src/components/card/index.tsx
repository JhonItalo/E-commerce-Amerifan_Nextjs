import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";

import ButtonAddCart from "../buttonAddCart";
type props = {
     pokemon: any;
};

const Card = ({ pokemon }: props) => {
     return (
          <S.Conteiner style={{ flex: "none" }}>
               <>
                    <Link href={`/products/${pokemon.name}`}>
                         <Image src={pokemon.image} alt={pokemon.name} width={140} height={158} priority />
                    </Link>
                    <div className="info">
                         <p className="name">{pokemon.name}</p>
                         <div className="type">
                              {pokemon.types.map((pokemon: any) => (
                                   <S.Type color={pokemon.type.name} key={pokemon.type.name}>
                                        {pokemon.type.name}
                                   </S.Type>
                              ))}
                         </div>
                    </div>

                    <ButtonAddCart name={pokemon.name} image={pokemon.image}>
                         Add to Cart
                    </ButtonAddCart>
               </>
          </S.Conteiner>
     );
};

export default Card;
