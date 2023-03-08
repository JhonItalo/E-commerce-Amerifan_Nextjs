import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

import AccessibleButtonName from "../acessibleButtonName";
import AccessibleName from "../acessibleLinkName";

const BannerMain = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const automaticSlideTimer = setInterval(() => {
               if (Carrosel.current) {
                    if (Carrosel.current.scrollLeft === 0) {
                         Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
                    } else if (Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                         Carrosel.current.scrollLeft = Carrosel.current.scrollWidth - Carrosel.current.offsetWidth;
                    } else if (Carrosel.current.scrollLeft === Carrosel.current.scrollWidth - Carrosel.current.offsetWidth) {
                         Carrosel.current.scrollLeft = 0;
                    } else {
                         return;
                    }
               }
          }, 7000);

          return () => clearInterval(automaticSlideTimer);
     }, []);

     const handleNextSlide = () => {
          if (Carrosel.current) {
               if (Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft = Carrosel.current.scrollWidth - Carrosel.current.offsetWidth;
               } else {
                    return;
               }
          }
     };
     const handlePreviousSlide = () => {
          if (Carrosel.current) {
               if (Carrosel.current.scrollLeft === 0) {
                    return;
               } else if (Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft = 0;
               } else if (Carrosel.current.scrollLeft === Carrosel.current.scrollWidth - Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else {
                    return;
               }
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
               Carrosel.current.scrollLeft = Carrosel.current.scrollWidth - Carrosel.current.offsetWidth;
          }
     };

     return (
          <S.Banner>
               <S.ConteinerSlide>
                    <S.Slide ref={Carrosel}>
                         <Link href="/telefonia">
                              <img src="/assets/banner/banner1.webp" alt="70% de desconto" />
                              <AccessibleName name="70% de desconto" />
                         </Link>
                         <Link href="/telefonia">
                              <img src="/assets/banner/banner2.webp" alt="promoção Black Friday" />
                              <AccessibleName name="promo~ção black friday" />
                         </Link>
                         <Link href="/telefonia">
                              <img src="/assets/banner/banner1.webp" alt="ganhe premios" />
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
                              <AccessibleButtonName name="imgm 1" />
                         </button>
                         <button onClick={handleRadio2}>
                              <AccessibleButtonName name="imgm 2" />
                         </button>
                         <button onClick={handleRadio3}>
                              <AccessibleButtonName name="imgm 3" />
                         </button>
                    </S.Radios>
               </S.ConteinerSlide>
          </S.Banner>
     );
};

export default BannerMain;
