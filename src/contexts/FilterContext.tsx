import React, { createContext } from "react";

export type propsFilterAtual = {
     type: string;
     color: string;
};

export type FiltercontextType = {
     filterAtual: propsFilterAtual;
     setFilterAtual: React.Dispatch<React.SetStateAction<propsFilterAtual>>;
};
const defaultValue = {
     filterAtual: { type: "", color: "" },
     setFilterAtual: () => {
          //nothing
     },
};
export const FilterProviderContext = createContext<FiltercontextType>(defaultValue);

interface props {
     filterAtual: propsFilterAtual;
     setFilterAtual: React.Dispatch<React.SetStateAction<propsFilterAtual>>;
     children: React.ReactNode;
}

const FilterProvider = ({ filterAtual, setFilterAtual, children }: props) => {
     console.log("context filter provider");

     return <FilterProviderContext.Provider value={{ filterAtual, setFilterAtual }}>{children}</FilterProviderContext.Provider>;
};

export default FilterProvider;