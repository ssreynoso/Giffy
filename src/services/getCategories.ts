import { APIConfig } from "./getAPIConfig";
import { Category } from "@/types";

export const getCategories = function () {
    const API_KEY = APIConfig.API_KEY;
    const BASE_URL = APIConfig.BASE_URL;
    const API_URL = `${BASE_URL}categories?
        api_key = ${API_KEY} &
    `.replace(/\s/g, "");

    return fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
            const { data } = response;
            const categories: Category[] = data.map((category: any) => {
                // Obtengo las propiedades principales de la categoría
                const { name, subcategories, gif } = category;

                // Como ya tengo el gif que la representa, obtengo sus datos
                const { title, id } = gif;
                const { url } = gif.images.downsized_medium;

                // Creo el objeto a utilizar
                const categoryObject: Category = {
                    name,
                    subcategories: subcategories.map((s_c: any) => { name: s_c.name }),
                    gif: { title, id, url }
                }
                
                return categoryObject;
            });
            return categories;
        });
};
