import Head from "next/head";
import { GetServerSideProps } from "next";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import { resolveListRequests } from "../request/MoveisRequests";
import { pokemonInfo } from "../types/types";
import CategoryContent from "../components/categoryContent";

type props = {
     data: pokemonInfo[];
};

const Moveis = ({ data }: props) => {
     console.log("moveis render");
     return (
          <>
               <Head>
                    <title>Amerifan - moveis</title>
                    <meta name="description" content="categoria de pokemons, filtragem de pokemons" />
               </Head>
               <main>
                    <DataCategoryProvider data={data}>
                         <CategoryContent name="moveis" />
                    </DataCategoryProvider>
               </main>
          </>
     );
};

export default Moveis;

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
