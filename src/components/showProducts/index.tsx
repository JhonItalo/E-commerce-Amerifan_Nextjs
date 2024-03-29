import { useRef } from "react";
import * as S from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { pokemonInfo } from "../../types/types";

import Card from "../card";

type props = {
     title: string;
     data: pokemonInfo[];
};

const ShowProducts = ({ title, data }: props) => {

     const Carrosel = useRef<HTMLDivElement | null>(null);

     const handleScrollright = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft += Carrosel.current.offsetWidth * 0.5 + Carrosel.current.offsetWidth * 0.009;
          }
     };
     const handleScrollleft = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft -= Carrosel.current.offsetWidth * 0.5 + Carrosel.current.offsetWidth * 0.009;
          }
     };

     return (
          <S.Conteiner>
               <>
                    <h2>{title}</h2>
                    <S.ConteinerSlide>
                         {data && (
                              <>
                                   <S.Slide ref={Carrosel}>
                                        {data.map((item: pokemonInfo) => (
                                             <Card key={item.id} pokemon={item} width="22%" />
                                        ))}
                                   </S.Slide>
                                   <button className="next btn_slide" onClick={handleScrollright}>
                                        <p>scrol to right</p>
                                        <IoIosArrowForward />
                                   </button>
                                   <button className="previous btn_slide" onClick={handleScrollleft}>
                                        <p>scrol to left</p>
                                        <IoIosArrowBack />
                                   </button>
                              </>
                         )}
                    </S.ConteinerSlide>
               </>
          </S.Conteiner>
     );
};

export default ShowProducts;
