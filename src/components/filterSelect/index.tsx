import * as S from "./styles";
import ItemFilter from "../itemFilter";
import ItemSubFilter from "../itemSubFilter";

const FilterSelect = () => {
     console.log("filter select render");
     return (
          <S.FilterSelect>
               <p className="filtroTitle">filtrado por:</p>
               <ul>
                    <ItemFilter title="Type">
                         <S.SubFilter className="subcategory">
                              <ItemSubFilter state="type" nameLabel="Water" id="water" />
                              <ItemSubFilter state="type" nameLabel="Fire" id="fire" />
                              <ItemSubFilter state="type" nameLabel="Electric" id="electric" />
                              <ItemSubFilter state="type" nameLabel="Ice" id="ice" />
                              <ItemSubFilter state="type" nameLabel="Grass" id="grass" />
                              <ItemSubFilter state="type" nameLabel="Fighting" id="fighting" />
                              <ItemSubFilter state="type" nameLabel="Ground" id="ground" />
                              <ItemSubFilter state="type" nameLabel="Poison" id="poison" />
                              <ItemSubFilter state="type" nameLabel="Flying" id="flying" />
                              <ItemSubFilter state="type" nameLabel="Psychic" id="psychic" />
                              <ItemSubFilter state="type" nameLabel="Ghost" id="ghost" />
                              <ItemSubFilter state="type" nameLabel="Dark" id="dark" />
                              <ItemSubFilter state="type" nameLabel="Fairy" id="fairy" />
                              <ItemSubFilter state="type" nameLabel="Bug" id="bug" />
                              <ItemSubFilter state="type" nameLabel="Rock" id="rock" />
                              <ItemSubFilter state="type" nameLabel="Dragon" id="dragon" />
                              <ItemSubFilter state="type" nameLabel="Steel" id="steel" />
                         </S.SubFilter>
                    </ItemFilter>
                    <ItemFilter title="Color">
                         <S.SubFilter className="subcategory">
                              <ItemSubFilter state="color" nameLabel="White" id="mewtwo" />
                              <ItemSubFilter state="color" nameLabel="Blue" id="blastoise" />
                              <ItemSubFilter state="color" nameLabel="Green" id="bulbasaur" />
                              <ItemSubFilter state="color" nameLabel="Red" id="charmander" />
                              <ItemSubFilter state="color" nameLabel="Purple" id="gengar" />
                         </S.SubFilter>
                    </ItemFilter>

                    <ItemFilter title="Weight">
                         <S.SubFilter className="subcategory">
                              <ItemSubFilter state="type" nameLabel="3 - 5lb" id="weight-3-5" />
                              <ItemSubFilter state="type" nameLabel="5 - 7lb" id="weight-5-7" />
                              <ItemSubFilter state="type" nameLabel="7 - 9lb" id="weight-7-9" />
                              <ItemSubFilter state="type" nameLabel="9 - 11lb" id="weight-9-11" />
                              <ItemSubFilter state="type" nameLabel="11 - 13lb" id="weight-11-13" />
                         </S.SubFilter>
                    </ItemFilter>
                    <ItemFilter title="Height">
                         <S.SubFilter className="subcategory">
                              <li className="itemSub">
                                   <label>
                                        3cm - 5cm:
                                        <input type="checkbox" name="metal" />
                                   </label>
                              </li>
                              <li className="itemSub">
                                   <label>
                                        5cm - 7cm:
                                        <input type="checkbox" name="metal" />
                                   </label>
                              </li>
                              <li className="itemSub">
                                   <label>
                                        7cm - 9cm:
                                        <input type="checkbox" name="metal" />
                                   </label>
                              </li>
                              <li className="itemSub">
                                   <label>
                                        9cm - 11cm:
                                        <input type="checkbox" name="metal" />
                                   </label>
                              </li>
                         </S.SubFilter>
                    </ItemFilter>
               </ul>
          </S.FilterSelect>
     );
};

export default FilterSelect;
