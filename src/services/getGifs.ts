import { APIConfig } from "../config";
import { Gif } from "@/types";

export const getGifs = function (keyword: string, limit: number) {
    const API_KEY = APIConfig.API_KEY
    const API_URL = `${APIConfig.BASE_URL}search?
        api_key = ${API_KEY} &
        q       = ${keyword} &
        limit   = ${limit}   &
        offset  = 0          &
        rating  = g          &
        lang    = en`
    .replace(/\s/g, "");

    return fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
            const { data } = response;
            const gifs: Gif[] = data.map((image: any) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return gifs;
        });
};
