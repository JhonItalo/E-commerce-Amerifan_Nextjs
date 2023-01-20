import { useCallback, useRef } from "react";
import Link from "next/link";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import UseFilterPokemons from "../../hooks/useFilterPokemons";
import { fetchData } from "../../request/BuscaFetch";
import AccessibleButtonName from "../acessibleButtonName";
import AccessibleName from "../acessibleLinkName";

const Search = () => {
     console.log("busca render");
     const inputRef = useRef<HTMLInputElement>(null);

     const { search, setSearch, filterPokemons, setDataPokemons, activeModal, setActiveModal } = UseFilterPokemons();

     const handleClickRequest = useCallback(() => {
          fetchData({ setDataPokemons });
     }, []);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     return (
          <S.Search>
               <input
                    ref={inputRef}
                    value={search}
                    onClick={handleClickRequest}
                    onChange={changeInput}
                    onFocus={() => setActiveModal(true)}
                    onBlur={() => {
                         const timeCloseModal = setTimeout(() => setActiveModal(false), 200);
                    }}
                    type="text"
                    placeholder="O que você está procurando?"
               />
               <button className="iconSearch">
                    <FiSearch />
                    <AccessibleButtonName name="buscar" />
               </button>
               <S.Atendimento>
                    <Link href="/telefonia">
                         Chame o vendedor
                         <AccessibleName name="chame o vendedor" />
                    </Link>
                    <Link href="/telefonia">
                         Atendimento <AccessibleName name="atendimento" />
                    </Link>
                    <Link href="/telefonia">
                         Lista de Presents <AccessibleName name="lista de presents" />
                    </Link>
               </S.Atendimento>

               {activeModal && filterPokemons.length > 0 && (
                    <S.ModalSearch>
                         {filterPokemons.map((item: pokemonSmall) => (
                              <Link
                                   href={`/products/${item.name}`}
                                   key={item.name}
                                   onClick={() => {
                                        setSearch("");
                                   }}
                              >
                                   <li>{item.name}</li>
                              </Link>
                         ))}
                    </S.ModalSearch>
               )}
          </S.Search>
     );
};

export default Search;
