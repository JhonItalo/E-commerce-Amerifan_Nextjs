import Document, { DocumentContext, Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
     static async getInitialProps(ctx: DocumentContext) {
          const sheet = new ServerStyleSheet();
          const originalRenderPage = ctx.renderPage;

          try {
               ctx.renderPage = () =>
                    originalRenderPage({
                         enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                    });

               const initialProps = await Document.getInitialProps(ctx);
               return {
                    ...initialProps,
                    styles: [initialProps.styles, sheet.getStyleElement()],
               };
          } finally {
               sheet.seal();
          }
     }
     render() {
          return (
               <Html lang="pt-BR">
                    <Head>
                         <link rel="preconnect" href="https://fonts.googleapis.com" />
                         <link rel="preconnect" href="https://fonts.gstatic.com" />
                         <link
                              href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
                              rel="stylesheet"
                         />
                         <meta name="author" content="John Ítalo Lucas Lima"></meta>
                         <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Head>
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}
