import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import ProductsContent from "../../components/ProductsContent";
import Head from "next/head";

import { requestProducts } from "../../request/ProductsRequest";

type props = {
     data: any;
};

const Products = ({ data }: props) => {
     console.log("products render");

     return (
          <>
               <Head>
                    {data ? <title>{data.name}</title> : "Product"}
                    <meta name="description" content="Generated by create next app" />
               </Head>
               <main>
                    <ProductsContent pokemon={data} />
               </main>
          </>
     );
};

export default Products;

interface IParams extends ParsedUrlQuery {
     product: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
     const { product } = context.params as IParams;
     const { data, error } = await requestProducts(product);

     if (error) {
          return { notFound: true };
     }

     return {
          props: { data: data },
          revalidate: 60 * 60,
     };
};
export const getStaticPaths: GetStaticPaths = async () => {
     return {
          paths: [{ params: { product: "abra" } }, { params: { product: "bulbasaur" } }],
          fallback: true,
     };
};
