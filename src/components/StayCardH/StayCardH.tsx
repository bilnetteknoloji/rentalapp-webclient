import React, {FC, useEffect, useState} from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
import {IProductsDTO, StayDataType} from "data/types";
import { Link } from "react-router-dom";
import {ProductHomes} from "../../data/productService";

export interface StayCardH{
    className?: string;
    size?: "default" | "small";
    params?: any; // or give it a more specific type
    data: IProductsDTO
}

const StayCard: FC<StayCardH> = ({
                                         size = "default",
                                         className = "",
                                         params,
                                         data
                                     }) => { const {UrunId,Resim, Link, SinifId, UrunAdi, Adres, Fiyat} = data;

    const [products, setProducts] = useState<IProductsDTO[]>([]);

    useEffect(() => {
        ProductHomes.list(params)
            .then((data) => {
                setProducts(Object.values(data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    const renderSliderGallery = () => {
        return (
            <div className="relative flex-shrink-0 w-full md:w-72 ">
                <GallerySlider
                    ratioClass="aspect-w-6 aspect-h-5"
                    Resim={Resim}
                    UrunId={`StayCardH_${UrunId}`}
                    href={Link}
                />
            </div>
        );
    };

    const renderTienIch = () => {
        return (
            <div className="hidden sm:grid grid-cols-3 gap-2">
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <i className="las la-user text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 guests
            </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="las la-bed text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 beds
            </span>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <i className="las la-bath text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              3 baths
            </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="las la-smoking-ban text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              No smoking
            </span>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <i className="las la-door-open text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 bedrooms
            </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <i className="las la-wifi text-lg"></i>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Wifi
            </span>
                    </div>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        return (
            <div className="flex-grow p-3 sm:p-5 flex flex-col">
                <div className="space-y-2">
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
            <span>
              {SinifId} in {Adres}
            </span>
                    </div>
                </div>
                <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
                {renderTienIch()}
                <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
                <div className="flex justify-between items-end">
                    <span className="text-base font-semibold text-secondary-500">
            {Fiyat}
                        {` `}
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /night
            </span>
          </span>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`nc-StayCardH group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow will-change-transform ${className}`}
            data-nc-id="StayCardH"
        >
            <div className="grid grid-cols-1 md:flex md:flex-row ">
                {renderSliderGallery()}
                {renderContent()}
            </div>
        </div>
    );
};

export default StayCardH;
