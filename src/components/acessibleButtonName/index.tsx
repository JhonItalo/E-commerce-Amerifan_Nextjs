import React from "react";

type props = {
     name: string;
};

const AccessibleButtonName = ({ name }: props) => {
     return <p style={{ opacity: "0", position: "absolute", fontSize: "0.2rem", top: "0" }}>{name}</p>;
};

export default AccessibleButtonName;