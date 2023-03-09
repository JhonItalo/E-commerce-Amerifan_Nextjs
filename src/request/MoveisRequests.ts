export const URL = "https://pokeapi.co/api/v2/pokemon/";

const generateArrayPromises = () => {
     const numberPokemons = 493;
     const fetchPokemons: any[] = [];
     for (let i = 387; i <= numberPokemons; i++) {
          fetchPokemons.push(
               fetch(`${URL}${i}`)
                    .then(async (response) => {
                         if (response.status != 200) {
                              const error = 1;
                              return Promise.reject(error);
                         }
                         return response.json();
                    })
                    .then((data) => {
                         const pokemon = {
                              name: data.name,
                              id: data.id,
                              image: data.sprites.other.dream_world.front_default,
                              types: data.types.map((pokemon: any) => pokemon.type.name)
                         }
                         return pokemon
                    })
                    .catch(() => {
                         const error = 1;
                         return error;
                    })
          );
     }
     return fetchPokemons;
};

const pokemonsListPromises = generateArrayPromises();

export const resolveListRequests = async () => {
     return Promise.all(pokemonsListPromises)
          .then((pokemons) => {
           pokemons.forEach((item,index)=> {
               if(item === 1){
                    pokemons.splice(index, 1);
                    index = index - 1;
               }
           })
           if(pokemons.length > 0){
               return {
                    data: pokemons,
                    error: false
               }
           } else{
               return {
                    data: [],
                    error: true
               }
           }

          })
          .catch(() => {
               const error = {
                    data: [],
                    error: true,
               };
               return error;
          });
};