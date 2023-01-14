export const URL = "https://pokeapi.co/api/v2/pokemon/";

const generateArrayPromises = () => {
     const numberPokemons = 16;
     const fetchPokemons: any[] = [];
     for (let i = 1; i <= numberPokemons; i++) {
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
                         return data;
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

export const resolveListPromises = async () => {
     return Promise.all(pokemonsListPromises)
          .then((pokemons) => {
               if (pokemons.find((item) => item === 1)) {
                    const error = {
                         data: [],
                         error: true,
                    };
                    return Promise.reject(error);
               }
               return {
                    data: pokemons,
                    error: false,
               };
          })
          .catch(() => {
               const error = {
                    data: [],
                    error: true,
               };
               return error;
          });
};
