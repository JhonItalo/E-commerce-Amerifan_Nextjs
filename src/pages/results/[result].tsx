import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

type props = {
     data: any;
     error: string;
};

const Results = ({ data, error }: props) => {
     console.log("products render");
     console.log(data);
     console.log(error, "error");

     return (
          <>
               <main
                    style={{
                         minHeight: "150vh",
                         background: "white",
                         width: "100%",
                         padding: "1rem 1rem 1rem 2rem ",
                    }}
               >
                    teste
               </main>
          </>
     );
};

export default Results;

interface IParams extends ParsedUrlQuery {
     product: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
     const { result } = context.params as IParams;

     return {
          props: { data: "1", error: result },
     };
};
