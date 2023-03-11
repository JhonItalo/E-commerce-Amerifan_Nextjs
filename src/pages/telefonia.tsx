import Head from "next/head";
import { GetServerSideProps } from "next";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import { resolveListRequests } from "../request/TelefoniaRequest";
import { pokemonInfo } from "../types/types";
import { Suspense, lazy } from "react";
import CategoryContent from "../components/categoryContent";

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
                    <DataCategoryProvider data={data}>
                         <CategoryContent name="telefonia" />
                    </DataCategoryProvider>
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
