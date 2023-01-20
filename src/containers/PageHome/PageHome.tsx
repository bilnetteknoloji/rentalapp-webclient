import React from "react";

import { TaxonomyType } from "../../data/types";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../../components/SectionHero/SectionHero";
import SectionSliderNewCategories from "../../components/SectionSliderNewCategories/SectionSliderNewCategories";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import SectionGridFeaturePlaces2 from "./SectionGridFeaturePlaces2";


const DEMO_CATS: TaxonomyType[] = [
    {
        id: "1",
        href: "/listing-stay-map",
        name: "New Yourk",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/listing-stay-map",
        name: "Singapore",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/listing-stay-map",
        name: "Paris",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "2",
        href: "/listing-stay-map",
        name: "London",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/listing-stay-map",
        name: "Tokyo",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "2",
        href: "/listing-stay-map",
        name: "Maldives",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

const DEMO_CATS_2: TaxonomyType[] = [
    {
        id: "1",
        href: "/listing-stay",
        name: "Enjoy the great cold",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        id: "222",
        href: "/listing-stay",
        name: "Sleep in a floating way",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "3",
        href: "/listing-stay",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "4",
        href: "/listing-stay",
        name: "Cool in the deep forest",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: "5",
        href: "/listing-stay",
        name: "In the billionaire's house",
        taxonomy: "category",
        count: 188288,
        thumbnail:
            "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

function PageHome() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

                {/* SECTION */}
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionGridFeaturePlaces />
                </div>

                {/* SECTION 1 */}
                <div className="relative py-16">
                    <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
                    <SectionSliderNewCategories
                        categories={DEMO_CATS}
                        uniqueClassName="PageHome_s1"
                    />
                </div>

                <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

                {/* SECTION */}
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionGridFeaturePlaces2 />
                </div>

                {/* SECTION */}
                <div className="relative py-16">
                    <SectionClientSay uniqueClassName="PageHome_" />
                </div>
            </div>
        </div>
    );
}

export default PageHome;
