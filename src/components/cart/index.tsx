import * as S from "./styles";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsCart3 } from "react-icons/bs";
import AccessibleButtonName from "../acessibleButtonName";
const Cart = () => {
     console.log("cart rende");
     const { storage } = useContext(CartContext);
     return (
          <S.Conteiner>
               <Link href="/cart">
                    <span>{storage.length > 0 && storage.length}</span>
                    <BsCart3 />

                    <AccessibleButtonName name="carrinho" />
               </Link>
          </S.Conteiner>
     );
};

export default Cart;
