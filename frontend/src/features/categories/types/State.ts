import Category from "./Category";

type CategoriesState = {
    categories: Category[];
    loadError?: string;
}

export default CategoriesState;