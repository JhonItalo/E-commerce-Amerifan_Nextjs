import Head from "next/head";
import { GetStaticProps } from "next";
import { resolveListRequests } from "../request/HomeRequest";
import SlideCategorys from "../components/slideCategory";
import PromotionSpan from "../components/promotionSpan";
import BannerMain from "../components/bannerMain";
import RegistrationOffers from "../components/registrationOffers";
import ShowProducts from "../components/showProducts";
import { pokemonInfo } from "../types/types";

type props = {
     bestSeller: pokemonInfo[];
     newProducts: pokemonInfo[];
};

export default function Home({ bestSeller, newProducts }: props) {
     console.log("home render");
     return (
          <>
               <Head>
                    <title>Home</title>
                    <meta name="description" content="e-commerce, best seller, new Products, promoção black friday amerifan" />
               </Head>

               <main
                    style={{
                         backgroundImage: 'url("/assets/background/Background.webp")',
                         backgroundRepeat: "repeat",
                         backgroundSize: "cover",
                         background: "black",
                    }}
               >
                    <SlideCategorys />
                    <PromotionSpan />
                    <BannerMain />
                    <div className="sections">
                         <ShowProducts title="Best Seller" data={bestSeller} />
                         <ShowProducts title="New products" data={newProducts} />
                    </div>
                    <RegistrationOffers />
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
