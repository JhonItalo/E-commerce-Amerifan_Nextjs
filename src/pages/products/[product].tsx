import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import InfoProducts from "../../components/infoProducts";

import { requestProducts } from "../../request/ProductsRequest";

type props = {
     data: any;
     error: boolean;
};

const Products = ({ data, error }: props) => {
     console.log("products render");
     console.log(data);
     console.log(error);

     return (
          <main
               style={{
                    minHeight: "150vh",
                    background: "white",
                    width: "100%",
                    padding: "1rem 1rem 1rem 2rem ",
               }}
          >
               <InfoProducts pokemon={data} />
          </main>
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
          revalidate: 86400,
     };
};
export const getStaticPaths: GetStaticPaths = async () => {
     return {
          paths: [{ params: { product: "abra" } }],
          fallback: true,
     };
};
