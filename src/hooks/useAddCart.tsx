import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface props {
     name: string;
     image: string;
}

type storageType = {
     name: string;
     image: string;
     count: number;
};

const UseAddCart = ({ name, image }: props) => {
     const [adiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);
     const { storage, setStorage } = useContext(CartContext);
     const copyStorage: storageType[] = storage.concat();

     const AddNewItem = (copyStorage: storageType[]) => {
          copyStorage.push({ name: name, image: image, count: 1 });
          setStorage(copyStorage);
     };

     const AddQuantidadeItem = (copyStorage: storageType[], index: number) => {
          copyStorage[index].count = copyStorage[index].count + 1;
          setStorage(copyStorage);
     };

     useEffect(() => {
          if (adiconarCarrinho > 0) {
               for (let index = 0; index < copyStorage.length; index++) {
                    if (copyStorage[index].name === name) {
                         AddQuantidadeItem(copyStorage, index);
                         return;
                    }
               }
               AddNewItem(copyStorage);
               return;
          }
     }, [adiconarCarrinho]);

     return { setAdcionarCarrinho };
};

export default UseAddCart;
