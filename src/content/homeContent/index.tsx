import React, { useContext } from "react";
import SlideCategorys from "../../components/slideCategory";
import PromotionSpan from "../../components/promotionSpan";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import { DataHomeContext, DataHomeType } from "../../contexts/DataHomeProvider";

const HomeContent = () => {
     const { bestSeller, newProducts } = useContext<DataHomeType>(DataHomeContext);
     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <div className="sections">
                    <ShowProducts title="Best Seller" data={bestSeller} />
                    <ShowProducts title="New products" data={newProducts} />
               </div>
               <RegistrationOffers />
          </>
     );
};

export default HomeContent;
