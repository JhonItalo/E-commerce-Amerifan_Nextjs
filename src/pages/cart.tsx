import React from "react";
import CartContent from "../content/cart";
import PrivateRoute from "../components/privateRoute";

const MyCart = () => {
     return (
          <PrivateRoute redirect="/cart">
               <main style={{ background: "#e2dada", paddingTop: "2rem", paddingBottom: "1rem", width: "100%" }}>
                    <CartContent />
               </main>
          </PrivateRoute>
     );
};

export default MyCart;
