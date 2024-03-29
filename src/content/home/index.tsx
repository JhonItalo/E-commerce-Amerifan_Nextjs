import React, { useContext } from "react";
import SlideCategorys from "../../components/slideCategory";
import PromotionSpan from "../../components/promotionSpan";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import { DataHomeContext, DataHomeType } from "../../contexts/DataHomeProvider";
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
