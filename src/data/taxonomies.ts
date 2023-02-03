import __taxonomies from "./jsons/__taxonomies.json";
import __stayTaxonomies from "./jsons/__stayTaxonomies.json";
import __experiencesTaxonomies from "./jsons/__experiencesTaxonomies.json";
import { TaxonomyType } from "./types";
import {ProductHomes, ProductsCategories} from "./productService";


const STAY_CATEGORIES: TaxonomyType[] = [];

ProductsCategories.list(new URLSearchParams()).then((response) => {
    const responseArray = Object.values(response);
    const updatedCategories = responseArray.map((item) => ({
        ...item,
        taxonomy: "category",
        listingType: "stay",
    }));
    DEMO_STAY_CATEGORIES.splice(0, DEMO_STAY_CATEGORIES.length, ...updatedCategories);
});

const DEMO_TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
}));

//

const DEMO_STAY_CATEGORIES: TaxonomyType[] = __stayTaxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  listingType: "stay",
}));
//


export {STAY_CATEGORIES,
};
