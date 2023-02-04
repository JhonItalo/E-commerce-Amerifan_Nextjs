import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

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
                    <ResultsContent data={data} isloading={isLoading} input={result} />
               </main>
          </>
     );
};

export default Results;
