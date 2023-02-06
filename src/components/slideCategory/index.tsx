import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AccessibleName from "../acessibleLinkName";
import AccessibleButtonName from "../acessibleButtonName";

const SlideCategorys = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const autoSlideTimer = setInterval(() => {
               if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current && Carrosel.current.scrollLeft > 0) {
                    Carrosel.current.scrollLeft = 0;
               }
          }, 5000);

          return () => clearInterval(autoSlideTimer);
     }, []);

     const handleNextSlide = () => {
          if (Carrosel.current?.scrollLeft === 0) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else if (Carrosel.current?.scrollLeft === Carrosel.current?.offsetWidth) {
               return;
          }
     };
     const handlePreviousSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft > 0) {
               Carrosel.current.scrollLeft = 0;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               return;
          }
     };

     return (
          <S.Conteiner>
               <S.ConteinerSlide>
                    <S.Slide ref={Carrosel}>
                         <div className="item">
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/bulba.png"
                                        alt="pokemon bulbassaur"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon bulbassaur" />
                              </Link>
                              <Link href="/smartphones">
                                   <Image
                                        src="/assets/poke/snorlax.png"
                                        alt="pokemon snorlax"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon snorlax" />
                              </Link>
                              <Link href="/eletrodomesticos">
                                   <Image src="/assets/poke/eevee.png" alt=" pokemon eevee" width={100} height={100} priority />
                                   <AccessibleName name=" imagem do pokemon eevee" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/psyduck.png"
                                        alt="pokemon psyduck"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon psyduck" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/squirtle.png"
                                        alt="pokemon squirtle"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon squirtle" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/caterpie.png"
                                        alt="pokemon caterpie"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon caterpie" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/dratini.png"
                                        alt="pokemon dratini"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon dratini" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image src="/assets/poke/abra.png" alt="pokemon abra" width={100} height={100} priority />
                                   <AccessibleName name=" imagem do pokemon abra" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        src="/assets/poke/bellsprout.png"
                                        alt="pokemon bellsprout"
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <AccessibleName name=" imagem do pokemon bellsprout" />
                              </Link>
                         </div>
                         <div className="item">
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball3.png"
                                        alt="pokemon abra"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball7.png"
                                        alt="pokemon abra"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball8.png"
                                        alt="pokemon bellsprout"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball4.png"
                                        alt="pokemon bellsprout"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball1.png"
                                        alt="pokemon caterpie"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball2.png"
                                        alt="pokemon dratini"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball5.png"
                                        alt="pokemon caterpie"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball6.png"
                                        alt="pokemon dratini"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link href="/telefonia">
                                   <Image
                                        className="ball"
                                        src="/assets/balls/ball9.png"
                                        alt="pokemon bellsprout"
                                        width={80}
                                        height={80}
                                        priority
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                         </div>
                    </S.Slide>
                    <button className="previous btn_slide" onClick={() => handlePreviousSlide()}>
                         <IoIosArrowBack />
                         <AccessibleButtonName name="previous slide" />
                    </button>
                    <button className="next btn_slide" onClick={() => handleNextSlide()}>
                         <IoIosArrowForward />
                         <AccessibleButtonName name="nest slide" />
                    </button>
               </S.ConteinerSlide>
          </S.Conteiner>
     );
};

export default SlideCategorys;
