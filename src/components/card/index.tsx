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
                              {pokemon.types.map((type: string) => (
                                   <S.Type color={type} key={type}>
                                        {type}
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
