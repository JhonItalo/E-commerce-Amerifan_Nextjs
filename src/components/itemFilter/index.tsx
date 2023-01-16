import React, { useState } from "react";
import * as S from "./styles";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

interface props {
     title: string;
     children?: React.ReactNode;
}

const ItemFilter = ({ title, children }: props) => {
     const [activeSubCategory, setactiveSubCategory] = useState<boolean>(false);

     const handleActiveCategory = () => {
          setactiveSubCategory(!activeSubCategory);
     };

     return (
          <S.CategoryLi active={activeSubCategory}>
               <S.Topic onClick={handleActiveCategory}>
                    <p>{title}</p>
                    {activeSubCategory ? <CgMathMinus /> : <CgMathPlus />}
               </S.Topic>
               {children}
          </S.CategoryLi>
     );
};

export default ItemFilter;