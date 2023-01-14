import React from "react";

import UseAddCart from "../../hooks/useAddCart";

interface props {
     name: string;
     image: string;
     children: React.ReactNode;
}
const ButtonAddCart = ({ name, image, children }: props) => {
     const { setAdcionarCarrinho } = UseAddCart({ name, image });

     const HandleClickAddCart = () => {
          setAdcionarCarrinho((prevstate) => prevstate + 1);
     };

     return (
          <button className="cart" onClick={HandleClickAddCart}>
               {children}
          </button>
     );
};

export default ButtonAddCart;
