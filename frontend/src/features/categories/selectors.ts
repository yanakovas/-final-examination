import { RootState } from "../../store";
import Category from "./types/Category";

export const selectCategories = (state: RootState): Category[] => state.categories.categories;
export const selectLoaderror = ( state: RootState): string| undefined =>
state.categories.loadError;