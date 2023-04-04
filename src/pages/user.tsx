import React from "react";
import PrivateRoute from "../components/privateRoute";
import UserContent from "../content/user";

const User = () => {
     return (
          <PrivateRoute redirect="/user">
               <main style={{ background: "#e2dada", padding: "2rem" }}>
                    <UserContent />
               </main>
          </PrivateRoute>
     );
};

export default User;
