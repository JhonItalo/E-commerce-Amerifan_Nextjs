import { GetStaticProps } from "next";
import ProductsByCategory from "../components/productsByCategory";
import DataProvider from "../contexts/DataProviderContext";
import { resolveListRequests } from "../request/CategoryRequest";

type props = {
     data: any[];
};

const Category = ({ data }: props) => {
     console.log(data);
     return (
          <DataProvider data={data}>
               <ProductsByCategory />
          </DataProvider>
     );
};

export default Category;

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
