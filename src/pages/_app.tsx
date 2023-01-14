import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "styled-components";
import themes from "../../styles/themes";
import type { AppProps } from "next/app";
import CarrinhoContext from "../contexts/CartContext";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function App({ Component, pageProps }: AppProps) {
     return (
          <>
               <ThemeProvider theme={themes}>
                    <CarrinhoContext>
                         <Header />
                         <Component {...pageProps} />
                         <Footer />
                    </CarrinhoContext>
               </ThemeProvider>
               <GlobalStyles />
          </>
     );
}
