import React, { useContext } from "react";
import SlideCategorys from "../../components/slideCategory";
import PromotionSpan from "../../components/promotionSpan";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import { DataHomeContext, DataHomeType } from "../../contexts/DataHomeProvider";
import Card from "../../components/card";
import BannerSecondary from "../../components/bannerSecondary";

const HomeContent = () => {
     const { bestSeller, newProducts } = useContext<DataHomeType>(DataHomeContext);
     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <ShowProducts title="Best Seller" data={bestSeller} />
               <BannerSecondary />
               <ShowProducts title="New products" data={newProducts} />

               <RegistrationOffers />
          </>
     );
};

export default HomeContent;
/*
import styled from "styled-components";

export const Teste = styled.div`
     width: 80%;
     margin: 2rem auto;
     padding: 2rem;
     height: 400px;
     display: flex;
     gap: 4%;

     background-color: grey;
     background-image: url("/assets/background/SPbackground.webp");
     overflow: hidden;
     .controlParentStyle {
          width: 22%;
     }
`;
<Teste>
{bestSeller.map((item) => (
     <Card key={item.id} pokemon={item} width="18%" />
))}
</Teste>

<Teste>
{newProducts.map((item) => (
     <Card key={item.id} pokemon={item} width="18%" />
))}
</Teste>*/
