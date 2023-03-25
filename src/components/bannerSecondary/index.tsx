import React from "react";
import * as S from "./styles";
import Link from "next/link";

const BannerSecondary = () => {
     return (
          <S.Teste>
               <Link href="/smartphones"></Link>
               <Link href="/moveis"></Link>
          </S.Teste>
     );
};

export default BannerSecondary;
