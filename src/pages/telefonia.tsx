import Head from "next/head";
import { GetStaticProps } from "next";
import ProductsByCategory from "../components/productsByCategory";
import DataProvider from "../contexts/DataProviderContext";
import { resolveListRequests } from "../request/TelefoniaRequest";
import { pokemonInfo } from "../types/types";

type props = {
     data: pokemonInfo[];
};

const Telefonia = ({ data }: props) => {
     console.log(data);
     return (
          <>
               <Head>
                    <title>Amerifan - telefonia</title>
                    <meta name="description" content="categoria de pokemons, filtragem de pokemons" />
               </Head>
               <main>
                    <DataProvider data={data}>
                         <ProductsByCategory />
                    </DataProvider>
               </main>
          </>
     );
};

export default Telefonia;

export const getStaticProps: GetStaticProps = async () => {
     const { data, error } = await resolveListRequests();

     if (error) {
          return { notFound: true };
     }
     return {
          props: {
               data: data,
          },
     };
};
