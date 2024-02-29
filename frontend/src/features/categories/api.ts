import Category, { CategoryId } from "./types/Category";

export async function loadCategories(): Promise<Category[]> {
  
    const response = await fetch('/api/categories');

    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.error);
    }
}
