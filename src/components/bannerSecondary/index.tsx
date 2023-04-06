import React from "react";
import * as S from "./styles";
import Link from "next/link";
import AccessibleButtonName from "../acessibleButtonName";

const BannerSecondary = () => {
     return (
          <S.Teste>
               <Link href="/smartphones">
                    <AccessibleButtonName name="promotion"/>
               </Link>
               <Link href="/moveis">
               <AccessibleButtonName name="promotion 2"/>
               </Link>
          </S.Teste>
     );
};

export default BannerSecondary;
