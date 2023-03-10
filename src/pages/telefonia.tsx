import Head from "next/head";
import { GetServerSideProps } from "next";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import { resolveListRequests } from "../request/TelefoniaRequest";
import { pokemonInfo } from "../types/types";
//import CategoryContent from "../components/categoryContent";
import { Suspense, lazy } from "react";
const CategoryContent = lazy(() => import("../components/categoryContent"));
//const DataCategoryProvider = lazy(() => import("../contexts/DataCategoryProvider"));

type props = {
     data: pokemonInfo[];
};

const Telefonia = ({ data }: props) => {
     console.log("telefonia render");

     return (
          <>
               <Head>
                    <title>Amerifan - telefonia</title>
                    <meta name="description" content="categoria de pokemons, filtragem de pokemons" />
               </Head>
               <main>
                    <Suspense fallback={<p>teste</p>}>
                         <DataCategoryProvider data={data}>
                              <CategoryContent name="telefonia" />
                         </DataCategoryProvider>
                    </Suspense>
               </main>
          </>
     );
};

export default Telefonia;

export const getServerSideProps: GetServerSideProps = async () => {
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
