import React from "react";
import * as S from "./styles";
type props = {
     width: string;
     height: string;
};

const Loading = ({ width, height }: props) => {
     return <S.Loading width={width} height={height} />;
};

export default Loading;