import React, { useContext } from "react";
import * as S from "./styles";
import { CartContext, storageType } from "../../contexts/CartContext";
import OrderSummary from "../orderSumary";
import ItemCart from "../itemCart";

const UserMyCart = () => {
     const { storage } = useContext(CartContext);
     return (
          <S.MyCart>
               <S.Content>
                    <S.ConteinerShopCart>
                         <div className="topic">
                              <h2>Shopping Cart</h2>
                              <p>{storage.length} Items</p>
                         </div>
                         <S.ListCart
                              onScroll={(e: React.SyntheticEvent) => e.stopPropagation()}
                              onMouseEnter={(e: React.SyntheticEvent) => {
                                   e.stopPropagation();
                                   const x = window.scrollX;
                                   const y = window.scrollY;
                                   window.scroll(x, y);
                              }}
                              onFocus={(e: React.SyntheticEvent) => {
                                   e.stopPropagation();
                                   const x = window.scrollX;
                                   const y = window.scrollY;
                                   window.scroll(x, y);
                              }}
                              onMouseOver={(e: React.SyntheticEvent) => {
                                   e.stopPropagation();
                                   const x = window.scrollX;
                                   const y = window.scrollY;
                                   window.scroll(x, y);
                              }}
                         >
                              {storage.length < 1 ? (
                                   <div className="empty">
                                        <p>Seu carrinho está vazio</p>
                                   </div>
                              ) : (
                                   storage.map((item: storageType) => (
                                        <ItemCart key={item.name} name={item.name} image={item.image} count={item.count} />
                                   ))
                              )}
                         </S.ListCart>
                    </S.ConteinerShopCart>
                    <OrderSummary />
               </S.Content>
          </S.MyCart>
     );
};

export default UserMyCart;
