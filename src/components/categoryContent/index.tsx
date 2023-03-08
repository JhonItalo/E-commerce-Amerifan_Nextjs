import React, { useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";

import FilterSelect from "../filterSelect";
import AllFilterPokemonsList from "../allFilterPokemonsList";
import FilterProvider from "../../contexts/FilterContext";

type propsFilterAtual = {
     type: string;
     color: string;
};

const CategoryContent = () => {
     const { asPath } = useRouter();
     const title = asPath.slice(1);

     const [type, setType] = useState<string>("");
     const [color, setColor] = useState<string>("");

     console.log("Produtos by category render");

     return (
          <S.ProductsByCategory>
               <h2>{title}</h2>
               <FilterProvider type={type} color={color} setType={setType} setColor={setColor}>
                    <S.Content>
                         <FilterSelect />
                         <AllFilterPokemonsList />
                    </S.Content>
               </FilterProvider>
          </S.ProductsByCategory>
     );
};

export default CategoryContent;
