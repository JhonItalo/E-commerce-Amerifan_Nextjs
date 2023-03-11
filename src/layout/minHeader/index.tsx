import React from "react";
import * as S from "./styles";
import Link from "next/link";

import AccessibleName from "../../components/acessibleLinkName";

const MinHeader = () => {
     return (
          <S.Header>
               <Link href="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="100%" width="170px" />
                    <AccessibleName name="Logo Amerifan" />
               </Link>
          </S.Header>
     );
};

export default MinHeader;
