import { useState } from "react";
import { pokemonSmall } from "../types/types";

const UseFilterPokemons = () => {
     const [dataPokemons, setDataPokemons] = useState<pokemonSmall[]>([]);
     const [search, setSearch] = useState<string>("");
     const [activeModal, setActiveModal] = useState<boolean>(false);

     let filterPokemons: pokemonSmall[] = [];
     if (search.length > 0 && dataPokemons.length > 0) {
          filterPokemons = dataPokemons.filter((data: pokemonSmall) => data.name.includes(search));
     }
     return { search, setSearch, filterPokemons, setDataPokemons, activeModal, setActiveModal };
};

export default UseFilterPokemons;
