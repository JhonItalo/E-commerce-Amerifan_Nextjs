import React, { useContext } from "react";
import { CartContext, contextCartType } from "../../contexts/CartContext";
import * as S from "./styles";
import Image from "next/image";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { storageType } from "../../types/types";

const ItemCart = ({ name, image, count }: storageType) => {
     const { storage, setStorage, removeToCart } = useContext<contextCartType>(CartContext);
     const copyStorage = storage.concat();

     const removeQuantityItem = () => {
          for (let i = 0; i < copyStorage.length; i++) {
               console.log("popsition verify");
               if (copyStorage[i].name === name) {
                    if (copyStorage[i].count >= 2) {
                         copyStorage[i].count = copyStorage[i].count - 1;
                         setStorage(copyStorage);
                         return;
                    } else if (copyStorage[i].count === 1) {
                         copyStorage.splice(i, 1);
                         setStorage(copyStorage);
                         return;
                    } else {
                         return;
                    }
               }
          }
     };
     const addQuantityItem = () => {
          for (let i = 0; i < copyStorage.length; i++) {
               console.log("popsition verify");
               if (copyStorage[i].name === name) {
                    copyStorage[i].count = copyStorage[i].count + 1;
                    setStorage(copyStorage);
                    return;
               }
          }
     };

     return (
          <S.Item>
               <S.ConteinerInfo>
                    <Image src={image} alt={`imagem do ${name}`} width={70} height={70} />
                    <p className="p">x</p>
                    <div>
                         <p className="title">{name}</p>
                         <button onClick={() => removeToCart(name)}>Remove</button>
                    </div>
               </S.ConteinerInfo>
               <S.CountPrice>
                    <button onClick={removeQuantityItem}>
                         <CgMathMinus />
                    </button>
                    <p>{count}</p>
                    <button onClick={addQuantityItem}>
                         <CgMathPlus />
                    </button>
               </S.CountPrice>
               <S.Price>
                    <p>$$$</p>
               </S.Price>
          </S.Item>
     );
};

export default ItemCart;
