import React from "react";
import PrivateRoute from "../components/privateRoute";
import UserContent from "../components/userContent";

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
