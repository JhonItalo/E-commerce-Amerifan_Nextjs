import Head from "next/head";
import { GetStaticProps } from "next";
import ProductsByCategory from "../components/categoryContent";
import DataProvider from "../contexts/DataCategoryProvider";
import { resolveListRequests } from "../request/TveVideoRequests";
import { pokemonInfo } from "../types/types";

type props = {
     data: pokemonInfo[];
};

const TveVideo = ({ data }: props) => {
     console.log("telefonia render");
     return (
          <>
               <Head>
                    <title>Amerifan - Tv e Video</title>
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

export default TveVideo;

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
