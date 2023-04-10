import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";

export type DatacontextType = {
     data: pokemonInfo[];
};

export const DataProviderContext = createContext<DatacontextType>({} as DatacontextType);

interface props {
     data: pokemonInfo[];
     children: React.ReactNode;
}

const DataCategoryProvider = ({ data, children }: props) => {
 

     return <DataProviderContext.Provider value={{ data }}>{children}</DataProviderContext.Provider>;
};

export default DataCategoryProvider;
