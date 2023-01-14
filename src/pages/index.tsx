import Head from "next/head";
import { GetStaticProps } from "next";
import { resolveListPromises } from "../request/HomeRequest";
import SlideCategorys from "../components/slideCategory";
import PromotionSpan from "../components/promotionSpan";
import BannerMain from "../components/bannerMain";
import RegistrationOffers from "../components/registrationOffers";
import ShowProducts from "../components/showProducts";

type props = {
     bestSeller: any[];
     newProducts: any[];
};

export default function Home({ bestSeller, newProducts }: props) {
     console.log(bestSeller, "bestseller");
     console.log(newProducts, "newproducts");
     return (
          <>
               <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <>
                         <SlideCategorys />
                         <PromotionSpan />
                         <BannerMain />
                         <section>
                              <ShowProducts title="Best Seller" data={bestSeller} />

                              <ShowProducts title="New products" data={newProducts} />
                         </section>
                         <RegistrationOffers />
                    </>
               </main>
          </>
     );
}
export const getStaticProps: GetStaticProps = async () => {
     const { data, error } = await resolveListPromises();

     if (error) {
          return { notFound: true };
     }

     return {
          props: {
               bestSeller: data.concat().splice(0, 8),
               newProducts: data.concat().splice(8, 16),
               error: error,
          },
     };
};

/*


 const [data, setdata] = useState<any>();
     const [err, seterr] = useState<any>();
     const teste = async () => {
          const a = await fetch("https://pokeapi.co/api/v2/pokemon/1")
               .then(async (response) => {
                    if (response.status === 200) {
                         return {
                              data: await response.json(),
                              err: false,
                         };
                    } else {
                         const error = {
                              data: [],
                              err: response.status,
                         };
                         return Promise.reject(error);
                    }
               })
               .catch((err) => {
                    return {
                         data: [],
                         err: "Failed to fetch",
                    };
               });
          return a;
     };

     useEffect(() => {
          const h = async () => {
               const { data } = await teste();
               console.log(data, "resultado da resposta");
          };
          h();
     }, []);
     console.log(data, "data");
     console.log(err, "error");

*/
