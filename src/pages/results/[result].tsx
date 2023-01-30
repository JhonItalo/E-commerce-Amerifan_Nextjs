import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { ResultsRequest } from "../../request/ResultsRequests";
import { pokemonSmall } from "../../types/types";
import ResultsContent from "../../components/resultsContent";
import { useRouter } from "next/router";
import useResultsFetch from "../../hooks/useResultsFetch";

interface IParams extends ParsedUrlQuery {
     result: string;
}

const Results = () => {
     console.log("results render");
     const router = useRouter();
     const { result } = router.query as IParams;
     const { data, isLoading, error } = useResultsFetch({ result });
     console.log(data, "data");

     return (
          <>
               <Head>
                    <title>Home</title>
                    <meta name="description" content="e-commerce, best seller, new Products, promoção black friday amerifan" />
               </Head>

               <main>
                    <ResultsContent data={data} input={result} />
               </main>
          </>
     );
};

export default Results;

/*

export const getServerSideProps: GetServerSideProps = async (context) => {
     const { result: search } = context.params as IParams;
     const { data, error } = await ResultsRequest({ search });

     if (error) {
          return { notFound: true };
     }

     return {
          props: { data: data },
     };
};
*/
