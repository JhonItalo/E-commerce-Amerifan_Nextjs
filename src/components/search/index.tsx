import React, { useCallback, useRef } from "react";
import Link from "next/link";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import UseSearchList from "../../hooks/useSearchList";
import { fetchData } from "../../request/BuscaFetch";
import AccessibleButtonName from "../acessibleButtonName";
import AccessibleName from "../acessibleLinkName";
import { useRouter } from "next/navigation";

const Search = () => {
     console.log("busca render");
     const inputRef = useRef<HTMLInputElement>(null);
     const router = useRouter();

     const { search, setSearch, filterPokemons, setDataPokemons, activeModal, setActiveModal } = UseSearchList();

     const handleClickRequest = useCallback(() => {
          fetchData({ setDataPokemons });
     }, []);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     const handleEnterResult = (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter") {
               setSearch("");
               inputRef.current?.blur();
               router.push(`/results/${search}`);
          }
     };

     const handleIconResult = () => {
          if (search.length > 0) {
               setSearch("");
               router.push(`/results/${search}`);
          }
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
                    onKeyDown={handleEnterResult}
                    type="text"
                    placeholder="O que você está procurando?"
               />
               <button className="iconSearch">
                    <FiSearch onClick={handleIconResult} />
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
