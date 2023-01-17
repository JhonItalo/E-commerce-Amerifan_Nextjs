import {URL} from "../utils/Constains"


export const requestProducts = async (params: string) => {
        return fetch(`${URL}${params}`).then((pokemon) => {
          if(pokemon.status != 200) {
            const error = {
                data: [],
                error: true
            };
            return Promise.reject(error);
          }
       return pokemon.json()
         }).then((data)=> {
            return {
                data: data,
                error: false
            }
         }).catch(()=> {
            const error = {
                data: [],
                error: true
            };
            return error
         })  
};
