import React, { useRef, useContext } from "react";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";

type props = {
     state: string;
     nameLabel: string;
     id: string;
};
const ItemSubFilter = ({ state, nameLabel, id }: props) => {
     const { type, color, setType, setColor } = useContext(FilterProviderContext);
     const inputRefCheck = useRef<HTMLInputElement | null>(null);

     let copyType = type;
     let copyColor = color;

     const removeFilter = () => {
          inputRefCheck.current ? inputRefCheck.current.removeAttribute("checked") : "";
          if (state === "type") {
               copyType = copyType.replace(id, "");
               setType(copyType);
          } else if (state === "color") {
               copyColor = copyColor.replace(id, "");
               setColor(copyColor);
          }
     };

     const addFilter = () => {
          inputRefCheck.current ? inputRefCheck.current.setAttribute("checked", "true") : "";
          if (state === "type") {
               copyType = copyType + id;
               setType(copyType);
          } else if (state === "color") {
               copyColor = copyColor + id;
               setColor(copyColor);
          }
     };

     const handleCheckFilter = (e: React.SyntheticEvent) => {
          e.preventDefault();
          if (state === "type") {
               if (type.includes(id)) {
                    return removeFilter();
               } else {
                    return addFilter();
               }
          } else if (state === "color") {
               if (color.includes(id)) {
                    return removeFilter();
               } else {
                    return addFilter();
               }
          }
     };

     return (
          <li className="itemSub">
               <label
                    onClick={(e) => {
                         handleCheckFilter(e);
                    }}
               >
                    {nameLabel}:
                    <div>
                         <p />
                         <input type="checkbox" ref={inputRefCheck} />
                    </div>
               </label>
          </li>
     );
};

export default ItemSubFilter;
