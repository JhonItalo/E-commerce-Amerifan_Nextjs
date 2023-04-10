import React, { createContext, ReactNode, useState } from "react";

export type page = {
     url: string | null | undefined;
     setUrl: React.Dispatch<React.SetStateAction<string | null | undefined | undefined>>;
};

export const RedirectLoginContext = createContext<page>({} as page);

type props = {
     children: ReactNode;
};

const RedirectLogin = ({ children }: props) => {
  
     const [url, setUrl] = useState<string | null | undefined>(null);
   
     return <RedirectLoginContext.Provider value={{ url, setUrl }}>{children}</RedirectLoginContext.Provider>;
};

export default RedirectLogin;
