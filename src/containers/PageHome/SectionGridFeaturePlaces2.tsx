import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "../../data/listings";
import { StayDataType } from "../../data/types";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "../../components/StayCard/StayCard";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
    stayListings?: StayDataType[];
    gridClass?: string;
    heading?: ReactNode;
    subHeading?: ReactNode;
    headingIsCenter?: boolean;
    tabs?: string[];
}


const SectionGridFeaturePlaces2: FC<SectionGridFeaturePlacesProps> = ({
                                                                         stayListings = DEMO_DATA,
                                                                         gridClass = "",
                                                                         heading = "Son Eklenenler",
                                                                         subHeading = "",
                                                                         headingIsCenter,
                                                                         tabs =  ["Balayı","Deniz Manzaralı", "Doğa Manzaralı", "Daire","Dağ Evi"],
                                                                     }) => {
    const renderCard = (stay: StayDataType) => {
        return <StayCard key={stay.id} data={stay} />;
    };

    // @ts-ignore
    return (
        <div className="nc-SectionGridFeaturePlaces relative">
            <HeaderFilter
                tabActive={"Balayı"}
                subHeading={subHeading}
                tabs={tabs}
                heading={heading}
                onClickTab={() => {}}
            />
            <div
                className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
            >
                {DEMO_DATA.map((stay) => renderCard(stay))}
            </div>
            <div className="flex mt-16 justify-center items-center">
                <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div>
        </div>
    );
};

export default SectionGridFeaturePlaces2;
