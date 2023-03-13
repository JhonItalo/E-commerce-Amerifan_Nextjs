import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";

export type DataHomeType = {
     bestSeller: pokemonInfo[];
     newProducts: pokemonInfo[];
};

export const DataHomeContext = createContext<DataHomeType>({} as DataHomeType);

interface props {
     data: DataHomeType;
     children: React.ReactNode;
}

const DataHomeProvider = ({ data, children }: props) => {
     console.log("context data provider");

     return <DataHomeContext.Provider value={data}>{children}</DataHomeContext.Provider>;
};

export default DataHomeProvider;
