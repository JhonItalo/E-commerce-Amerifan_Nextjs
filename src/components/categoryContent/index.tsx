import React, { useState } from "react";
import * as S from "./styles";
import FilterSelect from "../filterSelect";
import AllFilterPokemonsList from "../allFilterPokemonsList";
import FilterProvider from "../../contexts/FilterContext";

type props = {
     name: string;
};

const CategoryContent = ({ name }: props) => {
     const [type, setType] = useState<string>("");
     const [color, setColor] = useState<string>("");

     console.log("Produtos by category render");

     return (
          <S.ProductsByCategory>
               <h2>{name}</h2>
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
