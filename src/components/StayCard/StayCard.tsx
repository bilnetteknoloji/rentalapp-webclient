import React, { FC, useState, useEffect } from "react";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import BtnLikeIcon from "../../components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "../../components/SaleOffBadge/SaleOffBadge";
import {IProductsDTO} from "../../data/types";
import {ProductHomes} from "../../data/productService";
import {data} from "autoprefixer";
import StartRating from "../StartRating/StartRating";

export interface StayCardProps {
    className?: string;
    size?: "default" | "small";
    params?: any; // or give it a more specific type
    data: IProductsDTO
}

const StayCard: FC<StayCardProps> = ({
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
            <div className="relative w-full">
                <GallerySlider
                    UrunId={`StayCard_${UrunId}`}
                    ratioClass="aspect-w-4 aspect-h-3 "
                    Resim={Resim}
                    href={Link}
                />
            </div>
        );
    };

    const renderContent = () => {
        return (
            <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
                <div className="space-y-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {SinifId} · {SinifId} beds
                    </span>
                    <div className="flex items-center space-x-2">
                        <h2
                            className={` font-medium capitalize ${
                                size === "default" ? "text-lg" : "text-base"
                            }`}
                        >
                            <span className="line-clamp-1">{UrunAdi}</span>
                        </h2>
                    </div>
                    <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M11 21l-6-6 6-6"
                            />
                        </svg>
                        <span className="text-sm">{Adres}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Regular Price:</span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">${Fiyat}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Discount Price:</span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">${Fiyat}</span>
                </div>
            </div>
        );
    };

    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            {renderSliderGallery()}
            {renderContent()}
        </div>
    );
};

export default StayCard;