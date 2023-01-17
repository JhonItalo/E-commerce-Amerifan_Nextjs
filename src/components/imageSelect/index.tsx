import { useState } from "react";
import AccessibleName from "../acessibleLinkName";

import * as S from "./styles";

type props = {
     pokemon: any;
};

const ImageSelect = ({ pokemon = "ee" }: props) => {
     console.log("image sleect renser");
     console.log(pokemon, "pokemon");
     const [imageSelect, setImageSelect] = useState<string>("1");
     return (
          <S.Conteiner>
               <S.ButtonsSelect>
                    <S.Button active={imageSelect === "1"} onClick={() => setImageSelect("1")}>
                         <AccessibleName name="select imagem 1" />
                         <img src={pokemon.sprites.front_default} alt="1 foto pokemon" width="100%" height="100%" />
                    </S.Button>
                    <S.Button active={imageSelect === "2"} onClick={() => setImageSelect("2")}>
                         <AccessibleName name="select imagem 2" />
                         <img src={pokemon.sprites.back_default} alt="2 foto pokemon" width="100%" height="100%" />
                    </S.Button>
                    <S.Button active={imageSelect === "3"} onClick={() => setImageSelect("3")}>
                         <AccessibleName name="select imagem 3" />
                         <img src={pokemon.sprites.front_default} alt="3 foto pokemon" width="100%" height="100%" />
                    </S.Button>
               </S.ButtonsSelect>
               <S.ConteinerImage active={imageSelect}>
                    <img
                         src={pokemon.sprites.other.dream_world.front_default}
                         alt="Foto selecionado do pokemon"
                         width="350px"
                         height="100%"
                    />
               </S.ConteinerImage>
          </S.Conteiner>
     );
};

export default ImageSelect;
