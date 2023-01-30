import { pokemonSmall } from "../types/types";

export const ResultsRequest = async (result: string) => {
     return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154").then((response)=> response.json()).then(async (d)=> {
      const data = await d.results.filter((item: pokemonSmall)=> {
        if(item.name.includes(result)){
            return item
          
        }
      })
      return data
     })
}


