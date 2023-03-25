import React, { createContext, useState, useEffect } from "react";
import useFirstRender from "../hooks/useFirstRender";
import { storageType } from "../types/types";
import { toast } from "react-toastify";

export type contextCartType = {
     storage: storageType[];
     setStorage: React.Dispatch<React.SetStateAction<storageType[]>>;
     addToCart: (name: string, image: string) => void;
     removeToCart: (name: string) => void;
};
export const CartContext = createContext<contextCartType>({} as contextCartType);

interface props {
     children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
     console.log("coxtent render");
     const [storage, setStorage] = useState<storageType[]>([]);
     console.log(storage, "storage");
     const copyStorage: storageType[] = storage.concat();
     const firstRender = useFirstRender();

     useEffect(() => {
          if (firstRender) {
               const carrinho = getCartLocalStorage();
               if (!carrinho) {
                    setCartLocalStorage([]);
                    setStorage([]);
               } else {
                    setStorage(carrinho);
               }
          } else {
               setCartLocalStorage(storage);
          }
     }, [storage]);

     const setCartLocalStorage = (storage: storageType[]) => {
          localStorage.setItem("carrinho", JSON.stringify(storage));
     };
     const getCartLocalStorage = () => {
          const storage = localStorage.getItem("carrinho");
          if (storage) {
               return JSON.parse(storage);
          } else {
               return null;
          }
     };

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
                    toast.success("Adicionado ao carrinho");
                    return;
               }
          }
          AddNewItem(name, image);
          toast.success("Adicionado ao carrinho");
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
