import React from "react";
import { Gif } from "@/types";
import { getTrendingGifs } from "@/services/getTrending";

export function useTrending(limit: number = 8, offset: number = 0) {

    const [trendingLoading, setLoading] = React.useState(false);
    const [trendingGifs, setGifs]       = React.useState<Gif[]>([]);

    React.useEffect(() => {
        setLoading(true);

        getTrendingGifs(limit, offset)
        .then(gifs => {
            setGifs(gifs);
            setLoading(false)
        })
    }, [limit, offset]);

    return { trendingLoading, trendingGifs };
}