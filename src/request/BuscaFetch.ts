import { pokemonSmall } from "../types/types";

interface props {
     setDataPokemons: React.Dispatch<React.SetStateAction<pokemonSmall[]>>;
}

export const fetchData = async ({ setDataPokemons }: props) => {
     const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154");
     const data = await response.json();
     setDataPokemons(data.results);
};
