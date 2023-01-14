import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

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
                              <S.Item src="/assets/banner/banner1.webp" alt="70% de desconto" width="100%" height="500px" />
                         </Link>
                         <Link href="/telefonia">
                              <S.Item src="/assets/banner/banner2.webp" alt="promoção Black Friday" width="100%" height="500px" />
                         </Link>
                         <Link href="/telefonia">
                              <S.Item src="/assets/banner/banner1.webp" alt="ganhe premios" width="100%" height="500px" />
                         </Link>
                    </S.Slide>

                    <button className="next btn_slide" onClick={handleNextSlide}>
                         <IoIosArrowForward />
                    </button>
                    <button className="previous btn_slide" onClick={handlePreviousSlide}>
                         <IoIosArrowBack />
                    </button>
               </S.ConteinerSlide>

               <S.Radios>
                    <button onClick={handleRadio1}></button>
                    <button onClick={handleRadio2}></button>
                    <button onClick={handleRadio3}></button>
                    <button onClick={handleRadio1}></button>
                    <button onClick={handleRadio2}></button>
                    <button onClick={handleRadio3}></button>
                    <button onClick={handleRadio1}></button>
                    <button onClick={handleRadio2}></button>
                    <button onClick={handleRadio3}></button>
               </S.Radios>
               <div className="whiteRow" />
          </S.Banner>
     );
};

export default BannerMain;
