import Head from "next/head";
import { GetStaticProps } from "next";
import { resolveListRequests } from "../request/HomeRequest";
import { pokemonInfo } from "../types/types";
import HomeContent from "../content/homeContent";
import DataHomeProvider from "../contexts/DataHomeProvider";

type props = {
     bestSeller: pokemonInfo[];
     newProducts: pokemonInfo[];
};

export default function Home(data: props) {
     console.log("home render");
     return (
          <>
               <Head>
                    <title>Home</title>
                    <meta name="description" content="e-commerce, best seller, new Products, promoção black friday amerifan" />
               </Head>

               <main
                    className="main"
                    style={{
                         background: "black",
                         backgroundImage: `url("/assets/background/Background.webp")`,
                         backgroundRepeat: "repeat",
                         backgroundSize: "100% 40%",
                    }}
               >
                    <DataHomeProvider data={{ ...data }}>
                         <HomeContent />
                    </DataHomeProvider>
               </main>
          </>
     );
}
export const getStaticProps: GetStaticProps = async () => {
     const { data, error } = await resolveListRequests();

     if (error) {
          return { notFound: true };
     }

     return {
          props: {
               bestSeller: data.concat().splice(0, 8),
               newProducts: data.concat().splice(8, 16),
          },
     };
};
