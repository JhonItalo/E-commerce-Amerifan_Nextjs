import React, { useContext } from "react";
import * as S from "./styles";
import { CartContext, storageType } from "../../contexts/CartContext";
import ItemCart from "../itemCart";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

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
                         <div className="topicsTable">
                              <span className="pd">product details</span>
                              <span className="quantity">quantity</span>
                              <span className="total">total</span>
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
                                   <li className="empty">
                                        <p>Seu carrinho está vazio</p>
                                   </li>
                              ) : (
                                   storage.map((item: storageType) => (
                                        <ItemCart key={item.name} name={item.name} image={item.image} count={item.count} />
                                   ))
                              )}
                         </S.ListCart>
                         <Link href="/" className="backshopping">
                              <BsArrowLeft />
                              <span>Continue Shopping</span>
                         </Link>
                    </S.ConteinerShopCart>

                    <S.Sumary>
                         <h2 className="topic">Order Summary</h2>
                         <S.ConteinerBuy>
                              <S.InitialPrice>
                                   <p>{storage.length} Items </p>
                                   <p>$$$</p>
                              </S.InitialPrice>
                              <S.Form>
                                   <label>
                                        <p>Shipping</p>
                                        <select defaultValue="Standart Delivery  - $5,00">
                                             <option value="sd">Standart Delivery - $5.00</option>
                                             <option value="ei">Express International - $99.06</option>
                                        </select>
                                   </label>
                                   <label>
                                        <p>Promo Code</p>
                                        <input type="text" name="name" placeholder="Enter you code" />
                                   </label>
                                   <button className="apply" onClick={(e) => e.preventDefault()}>
                                        Apply
                                   </button>
                              </S.Form>

                              <S.TotalCoast>
                                   <div>
                                        <p>total coast</p>
                                        <p>$$$</p>
                                   </div>
                                   <button className="checkout">checkout</button>
                              </S.TotalCoast>
                         </S.ConteinerBuy>
                    </S.Sumary>
               </S.Content>
          </S.MyCart>
     );
};

export default UserMyCart;
