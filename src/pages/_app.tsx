import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "styled-components";
import themes from "../../styles/themes";
import type { AppProps } from "next/app";
import CarrinhoContext from "../contexts/CartContext";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
     return (
          <>
               <ThemeProvider theme={themes}>
                    <CarrinhoContext>
                         <Header />
                         <Component {...pageProps} />
                    </CarrinhoContext>
                    <Footer />
               </ThemeProvider>
               <ToastContainer />
               <GlobalStyles />
          </>
     );
}
