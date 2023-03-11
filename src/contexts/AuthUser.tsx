import React, { createContext, useEffect, useState } from "react";
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from "../request/LoginRequest";
import { user } from "../types/types";

export interface contextAuthUser extends user {
     authentication: (email: string, password: string) => Promise<boolean>;
     logout: () => void;
     simulateRegister: (email: string, token: string) => void;
}
export const AuthUserContext = createContext<contextAuthUser>({} as contextAuthUser);

type props = {
     children: React.ReactNode;
};
export const AuthUserProvider = ({ children }: props) => {
     const [user, setUser] = useState<user | null>(null);
     console.log("auth context");
     console.log(user, "user");

     useEffect(() => {
          const user = getUserLocalStorage();
          if (user) {
               setUser(user);
          }
     }, []);

     const authentication = async (email: string, password: string) => {
          const { token } = await LoginRequest(email, password);
          if (token) {
               const payload = { token: token, email };
               setUserLocalStorage(payload);
               setUser(payload);
               return true;
          }
          return false;
     };

     const logout = async () => {
          setUserLocalStorage(null);
          setUser(null);
     };

     const simulateRegister = async (email: string, token: string) => {
          const payload = { token: token, email: email };
          setUserLocalStorage(payload);
          setUser(payload);
     };

     return (
          <AuthUserContext.Provider value={{ ...user, authentication, logout, simulateRegister }}>
               {children}
          </AuthUserContext.Provider>
     );
};
