import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";
import type { AppProps } from "next/app";
import CarrinhoContext from "../contexts/CartContext";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../layout/nav";
import RedirectLogin from "../contexts/RedirectLogin";
import { AuthUserProvider } from "../contexts/AuthUser";

export default function App({ Component, pageProps }: AppProps) {
     return (
          <>
               <ThemeProvider theme={themes}>
                    <AuthUserProvider>
                         <CarrinhoContext>
                              <RedirectLogin>
                                   <Header />
                                   <Nav />
                                   <Component {...pageProps} />
                              </RedirectLogin>
                         </CarrinhoContext>
                         <Footer />
                    </AuthUserProvider>
               </ThemeProvider>
               <ToastContainer />
               <GlobalStyles />
          </>
     );
}
