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

const ProductsByCategory = () => {
     const { asPath } = useRouter();
     const title = asPath.slice(1);

     const [filterAtual, setFilterAtual] = useState<propsFilterAtual>({ type: "", color: "" });

     console.log("Produtos by category render");

     return (
          <S.ProductsByCategory>
               <h2>{title}</h2>
               <FilterProvider filterAtual={filterAtual} setFilterAtual={setFilterAtual}>
                    <S.Content>
                         <FilterSelect />
                         <AllFilterPokemonsList />
                    </S.Content>
               </FilterProvider>
          </S.ProductsByCategory>
     );
};

export default ProductsByCategory;
