import React, { FC } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionGridHasMap from "./SectionGridHasMap";
import { Helmet } from "react-helmet";

export interface ListingStayMapPageProps {
    className?: string;
}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({
                                                             className = "Fethiye",
                                                         }) => {
    return (
        <div
            className={`nc-ListingStayMapPage relative ${className}`}
            data-nc-id="ListingStayMapPage"
        >
            <Helmet>
                <title>Hep Kiralik || Booking </title>
            </Helmet>
            <BgGlassmorphism />

            {/* SECTION */}
            <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
                <SectionGridHasMap />
            </div>

            <div className="container overflow-hidden">
                {/* SECTION 1 */}
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionSliderNewCategories
                        heading="Explore by types of stays"
                        subHeading="Explore houses based on 10 types of stays"
                        categoryCardType="card5"
                        itemPerRow={5}
                        sliderStyle="style2"
                        uniqueClassName="ListingStayMapPage"
                    />
                </div>
            </div>
        </div>
    );
};

export default ListingStayMapPage;
