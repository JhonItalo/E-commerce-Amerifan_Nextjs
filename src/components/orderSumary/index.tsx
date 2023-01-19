import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import * as S from "./styles";

const OrderSummary = () => {
     const { storage } = useContext(CartContext);

     return (
          <S.Sumary>
               <h2>Order Summary</h2>
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
     );
};

export default OrderSummary;
