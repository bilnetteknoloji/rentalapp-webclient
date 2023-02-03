import {STAY_CATEGORIES,} from "./taxonomies";
import {ProductHomes} from "./productService";
import {DEMO_AUTHORS} from "./authors";



interface IPost {
  id: string;
  listingCategoryId: string;
  authorId: string;
  saleOff?: string;
  isAds?: boolean;
}

interface ICategory {
  id: string;
  taxonomy: string;
  listingType: string;
}

interface IAuthor {
  id: string;
// ...
}

interface StayDataType extends IPost {
  author: IAuthor;
  listingCategory: ICategory;
  saleOff: string;
  isAds: boolean;
}

const STAY_LISTINGS: StayDataType[] = [];

ProductHomes.list(new URLSearchParams()).then((response) => {
  const stayListings = response.map((post: IPost, index: number): StayDataType => {
    const category = STAY_CATEGORIES.filter(
        (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0];

    return {
      ...post,
      id: `stayListing_${index}_`,
      saleOff: !index ? "-20% today" : post.saleOff || "",
      isAds: !index ? true : post.isAds || false,
      author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      listingCategory: category,
    };
  });

  STAY_LISTINGS.splice(0, STAY_LISTINGS.length, ...stayListings);
});

export { STAY_LISTINGS};
