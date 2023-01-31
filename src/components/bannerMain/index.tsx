import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import AccessibleName from "../acessibleLinkName";
import AccessibleButtonName from "../acessibleButtonName";

const BannerMain = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const automaticSlideTimer = setInterval(() => {
               if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
               } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth * 2) {
                    Carrosel.current.scrollLeft = 0;
               } else {
                    return;
               }
          }, 7000);

          return () => clearInterval(automaticSlideTimer);
     }, []);

     const handleNextSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
          } else {
               return;
          }
     };
     const handlePreviousSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               return;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
               Carrosel.current.scrollLeft = 0;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth * 2) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else {
               return;
          }
     };
     const handleRadio1 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = 0;
          }
     };
     const handleRadio2 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          }
     };
     const handleRadio3 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
          }
     };

     return (
          <S.Banner>
               <S.ConteinerSlide>
                    <S.Slide ref={Carrosel}>
                         <Link href="/telefonia">
                              <Image
                                   src="/assets/banner/banner1.webp"
                                   alt="70% de desconto"
                                   layout="fill"
                                   objectFit="cover"
                                   priority
                              />
                              <AccessibleName name="70% de desconto" />
                         </Link>
                         <Link href="/telefonia">
                              <Image
                                   priority
                                   src="/assets/banner/banner2.webp"
                                   alt="promoção Black Friday"
                                   layout="fill"
                                   objectFit="cover"
                              />
                              <AccessibleName name="promo~ção black friday" />
                         </Link>
                         <Link href="/telefonia">
                              <Image
                                   src="/assets/banner/banner1.webp"
                                   alt="ganhe premios"
                                   layout="fill"
                                   objectFit="cover"
                                   priority
                              />
                              <AccessibleName name="ganhe premios" />
                         </Link>
                    </S.Slide>

                    <button className="next btn_slide" onClick={handleNextSlide}>
                         <IoIosArrowForward />
                         <AccessibleButtonName name="next slde" />
                    </button>
                    <button className="previous btn_slide" onClick={handlePreviousSlide}>
                         <IoIosArrowBack />
                         <AccessibleButtonName name="previous slide" />
                    </button>

                    <S.Radios>
                         <button onClick={handleRadio1}>
                              <AccessibleButtonName name="imagem 1" />
                         </button>
                         <button onClick={handleRadio2}>
                              <AccessibleButtonName name="imagem 2" />
                         </button>
                         <button onClick={handleRadio3}>
                              <AccessibleButtonName name="imagem 3" />
                         </button>
                         <button onClick={handleRadio1}>
                              <AccessibleButtonName name="imagem 4" />
                         </button>
                         <button onClick={handleRadio2}>
                              <AccessibleButtonName name="imagem 5" />
                         </button>
                         <button onClick={handleRadio3}>
                              <AccessibleButtonName name="imagem 6" />
                         </button>
                         <button onClick={handleRadio1}>
                              <AccessibleButtonName name="imagem 7" />
                         </button>
                         <button onClick={handleRadio2}>
                              <AccessibleButtonName name="imagem 8" />
                         </button>
                         <button onClick={handleRadio3}>
                              <AccessibleButtonName name="imagem 9" />
                         </button>
                    </S.Radios>
               </S.ConteinerSlide>

               <div className="whiteRow" />
          </S.Banner>
     );
};

export default BannerMain;
