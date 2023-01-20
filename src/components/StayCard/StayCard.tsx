import React, { FC, useState, useEffect } from "react";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import BtnLikeIcon from "../../components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "../../components/SaleOffBadge/SaleOffBadge";
import { productService } from "../../data/productService";
import { AxiosError } from 'axios';

interface StayCardProps {
    className?: string;
    productId: number;
    size?: "default" | "small";
}

const StayCard: FC<StayCardProps> = ({ className = "", productId, size = "default" }) => {
    const [productData, setProductData] = useState({});
    const [commentsData, setCommentsData] = useState([]);
    const [pictureData, setPictureData] = useState([]);
    const [priceData, setPriceData] = useState({});
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        productService
            .getProductData(productId)
            .then((data) => setProductData(data))
            .catch((err) => console.log(err));
        productService
            .getProductComments(productId)
            .then((data) => setCommentsData(data))
            .catch((err) => console.log(err));
        productService
            .getProductPictures(productId)
            .then((data) => setPictureData(data))
            .catch((err) => console.log(err));
        productService
            .getProductPrice(productId)
            .then((data) => setPriceData(data))
            .catch((err) => console.log(err));
        productService
            .getProductCurrency(productId)
            .then((data) => setCurrencyData(data))
            .catch((err) => console.log(err));
    }, [productId]);

    // Render component using the data retrieved from the API
};



    const renderSliderGallery = () => {
        return (
            <div className="relative w-full">
                <GallerySlider
                    uniqueID={`StayCard_${id}`}
                    ratioClass="aspect-w-4 aspect-h-3 "
                    galleryImgs={galleryImgs}
                    href={href}
                />
                <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
                {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
            </div>
        );
    };

    const renderContent = () => {
        return (
            <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
                <div className="space-y-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {listingCategory.name} · {bedrooms} beds
                    </span>
                    <div className="flex items-center space-x-2">
                        {isAds && <Badge name="ADS" color="green" />}
                        <h2
                            className={` font-medium capitalize ${
                                size === "default" ? "text-lg" : "text-base"
                            }`}
                        >
                            <span className="line-clamp-1">{title}</span>
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
                        <span className="text-sm">{address}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <StartRating start={reviewStart} count={reviewCount} />
                    <Link
                        to={href}
                        className={`text-base font-medium text-neutral-800 dark:text-neutral-200 hover:underline ${
                            size === "default" ? "" : "text-sm"
                        }`}
                    >
                        See more
                    </Link>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Regular Price:</span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">${regularPrice}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Discount Price:</span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">${discountPrice}</span>
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