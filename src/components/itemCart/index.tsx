import React, { useContext } from "react";
import { CartContext, storageType } from "../../contexts/CartContext";
import * as S from "./styles";
import Image from "next/image";

const ItemCart = ({ name, image, count }: storageType) => {
     const { storage, setStorage } = useContext(CartContext);
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
          <div>
               <S.Item>
                    <S.ConteinerFilme>
                         <Image src={image} alt={`imagem do ${name}`} width={70} height={70} />
                         <p className="p">x</p>
                         <div>
                              <p className="title">{name}</p>
                         </div>
                    </S.ConteinerFilme>
                    <S.CountPrice>
                         <S.Count>
                              <button onClick={removeQuantityItem}>-</button>
                              <p>{count}</p>
                              <button onClick={addQuantityItem}>+</button>
                         </S.Count>
                         <S.Price>
                              <p>$$$</p>
                         </S.Price>
                    </S.CountPrice>
               </S.Item>
          </div>
     );
};

export default ItemCart;
