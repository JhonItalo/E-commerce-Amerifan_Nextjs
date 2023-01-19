import { useContext } from "react";
import * as S from "./styles";
import { DataProviderContext } from "../../contexts/DataProviderContext";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";
import Card from "../card/index";
import { pokemonInfo } from "../../types/types";

const AllFilterPokemonsList = () => {
     console.log("list filter render");

     const { data } = useContext(DataProviderContext);
     const { filterAtual } = useContext<FiltercontextType>(FilterProviderContext);

     const type: pokemonInfo[] = data.filter((item: pokemonInfo) => {
          for (let i = 0; i < item.types.length; i++) {
               if (filterAtual.type.includes(item.types[i])) {
                    return item.name;
               }
          }
     });

     const color: pokemonInfo[] = data.filter((item: pokemonInfo) => {
          if (filterAtual.color.includes(item.name)) {
               return item.name;
          }
     });

     const processingArrayFilter = () => {
          const filterConcats = type.concat(color);
          const removeDuplicate: pokemonInfo[] = [];

          filterConcats.forEach((element) => {
               if (!removeDuplicate.includes(element)) {
                    removeDuplicate.push(element);
               }
          });
          return removeDuplicate;
     };
     const filtrados: pokemonInfo[] = processingArrayFilter();

     return (
          <S.ConteinerPokemons>
               <>
                    {type.length === 0 && color.length === 0 && (
                         <>
                              <div className="titleOrder">
                                   <p style={{ color: "black" }}>{data.length} resultados encontrados</p>
                                   <select defaultValue="relevãncia">
                                        <option value="relevância">relevância</option>
                                        <option value="mais vendidos">mais vendidos</option>
                                        <option value="maior preço">maior preço</option>
                                        <option value="menor preço">menor preço</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {data.map((item: any) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}

                    {(type.length > 0 || color.length > 0) && (
                         <>
                              <div className="titleOrder">
                                   <p style={{ color: "black" }}>{filtrados.length} resultados encontrados</p>
                                   <select defaultValue="relevãncia">
                                        <option value="relevância">relevância</option>
                                        <option value="mais vendidos">mais vendidos</option>
                                        <option value="maior preço">maior preço</option>
                                        <option value="menor preço">menor preço</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {filtrados.map((item: any) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}
               </>
          </S.ConteinerPokemons>
     );
};

export default AllFilterPokemonsList;
