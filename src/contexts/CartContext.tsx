import React, { createContext, useState, useEffect } from "react";
import useFirstRender from "../hooks/useFirstRender";

export type storageType = {
     name: string;
     image: string;
     count: number;
};

type contextType = {
     storage: storageType[];
     setStorage: React.Dispatch<React.SetStateAction<storageType[]>>;
     addToCart: (name: string, image: string) => void;
     removeToCart: (name: string) => void;
};
const defaultValue = {
     storage: [],
     setStorage: () => {},
     addToCart: () => {},
     removeToCart: () => {},
};
export const CartContext = createContext<contextType>(defaultValue);

interface props {
     children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
     console.log("coxtent render");
     const [storage, setStorage] = useState<storageType[]>([]);
     const copyStorage: storageType[] = storage.concat();
     const firstRender = useFirstRender();

     useEffect(() => {
          const InicitializeLocalStorage = () => {
               const localStorageString = localStorage.getItem("carrinho");
               if (typeof localStorageString != typeof "string") {
                    localStorage.setItem("carrinho", "[]");
                    return [];
               } else {
                    const localStorageArray = JSON.parse(localStorageString!);
                    return localStorageArray;
               }
          };
          setStorage(InicitializeLocalStorage);
     }, []);

     const writingNewValueLocalStorage = () => {
          localStorage.setItem("carrinho", JSON.stringify(storage));
     };

     useEffect(() => {
          if (firstRender === false) {
               writingNewValueLocalStorage();
          }
     }, [storage]);

     const AddNewItem = (name: string, image: string) => {
          copyStorage.push({ name: name, image: image, count: 1 });
          setStorage(copyStorage);
     };

     const AddQuantidadeItem = (index: number) => {
          copyStorage[index].count = copyStorage[index].count + 1;
          setStorage(copyStorage);
     };

     const addToCart = (name: string, image: string) => {
          for (let index = 0; index < copyStorage.length; index++) {
               if (copyStorage[index].name === name) {
                    AddQuantidadeItem(index);
                    return;
               }
          }
          AddNewItem(name, image);
          return;
     };
     const removeToCart = (name: string) => {
          for (let index = 0; index < copyStorage.length; index++) {
               if (copyStorage[index].name === name) {
                    copyStorage.splice(index, 1);
                    setStorage(copyStorage);
                    return;
               }
          }
     };

     return <CartContext.Provider value={{ storage, setStorage, addToCart, removeToCart }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;
