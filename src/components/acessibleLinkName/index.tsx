import React from "react";

type props = {
     name: string;
};
const AccessibleName = ({ name }: props) => {
     return <p style={{ position: "absolute", visibility: "hidden", fontSize: "0.2rem", top: "0" }}>{name}</p>;
};

export default AccessibleName;
