import { useContext, useState } from "react";
import * as S from "./styles";
import { DataProviderContext, DatacontextType } from "../../contexts/DataCategoryProvider";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";
import Card from "../card/index";
import { pokemonInfo } from "../../types/types";

const AllFilterPokemonsList = () => {
     console.log("list filter render");

     const { data } = useContext<DatacontextType>(DataProviderContext);
     const { type, color } = useContext<FiltercontextType>(FilterProviderContext);
     const [select, setSelect] = useState<string>("default");

     const selectOrder = (select: string) => {
          if (data) {
               if (select === "default") {
                    return data;
               } else if (select === "name") {
                    const nameOrder = data.slice().sort((a, b) => {
                         if (a.name < b.name) {
                              return -1;
                         } else {
                              return 0;
                         }
                    });
                    return nameOrder;
               } else if (select === "type") {
                    const typeOrder = data.slice().sort((a, b) => {
                         if (a.types[0] < b.types[0]) {
                              return -1;
                         } else {
                              return 0;
                         }
                    });
                    return typeOrder;
               }
          } else {
               return undefined;
          }
     };

     const order: pokemonInfo[] | undefined = selectOrder(select);
     
     const filterType: pokemonInfo[] =
          order && type != ""
               ? order.filter((item: pokemonInfo) => {
                      for (let i = 0; i < item.types.length; i++) {
                           if (type.includes(item.types[i])) {
                                return item.name;
                           }
                      }
                 })
               : [];

     const filterColor: pokemonInfo[] =
          order && color != ""
               ? order.filter((item: pokemonInfo) => {
                      if (color.includes(item.name)) {
                           return item.name;
                      }
                 })
               : [];

     const processingArrayFilter = () => {
          const filterConcats = filterType.concat(filterColor);
          const removeDuplicate: pokemonInfo[] = [];

          filterConcats.forEach((element) => {
               if (!removeDuplicate.includes(element)) {
                    removeDuplicate.push(element);
               }
          });
          return removeDuplicate;
     };

     const filtrados = processingArrayFilter();

     return (
          <S.ConteinerPokemons>
               <>
                    {order && type === "" && color === "" && (
                         <>
                              <div className="titleOrder">
                                   <p style={{ color: "black" }}>{order.length} resultados encontrados</p>
                                   <select
                                        value={select}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e.currentTarget.value)}
                                   >
                                        <option value="default">Creation date</option>
                                        <option value="name">Name</option>
                                        <option value="type">Type</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {order.map((item: pokemonInfo) => (
                                        <Card width="30%" key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}

                    {(type != "" || color != "") && (
                         <>
                              <div className="titleOrder">
                                   <p style={{ color: "black" }}>{filtrados.length} resultados encontrados</p>
                                   <select
                                        value={select}
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e.currentTarget.value)}
                                   >
                                        <option value="default">Creation date</option>
                                        <option value="name">Name</option>
                                        <option value="type">Type</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {filtrados.map((item: pokemonInfo) => (
                                        <Card width="30%" key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}
               </>
          </S.ConteinerPokemons>
     );
};

export default AllFilterPokemonsList;
