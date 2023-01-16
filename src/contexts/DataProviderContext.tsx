import React, { createContext } from "react";

export type DatacontextType = {
     data: any[];
};

export const DataProviderContext = createContext<DatacontextType>({ data: [] });

interface props {
     data: any[];
     children: React.ReactNode;
}

const DataProvider = ({ data, children }: props) => {
     console.log("context data provider");

     return <DataProviderContext.Provider value={{ data }}>{children}</DataProviderContext.Provider>;
};

export default DataProvider;
