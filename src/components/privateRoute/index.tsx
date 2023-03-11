import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { RedirectLoginContext, page } from "../../contexts/RedirectLogin";

type propsPrivate = {
     redirect: string;
     children: React.ReactNode;
};
const PrivateRoute = ({ redirect, children }: propsPrivate) => {
     const router = useRouter();
     const { token } = useContext<contextAuthUser>(AuthUserContext);
     const { setUrl } = useContext<page>(RedirectLoginContext);

     useEffect(() => {
          if (!token) {
               setUrl(redirect);
               router.push("/login");
          }
     }, [token]);

     return <>{token && children}</>;
};
export default PrivateRoute;
