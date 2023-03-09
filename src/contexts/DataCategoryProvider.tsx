import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";

export type DatacontextType = {
     data: pokemonInfo[] | null;
};

export const DataProviderContext = createContext<DatacontextType>({} as DatacontextType);

interface props {
     data: pokemonInfo[] | null;
     children: React.ReactNode;
}

const DataCategoryProvider = ({ data, children }: props) => {
     console.log("context data provider");

     return <DataProviderContext.Provider value={{ data }}>{children}</DataProviderContext.Provider>;
};

export default DataCategoryProvider;
