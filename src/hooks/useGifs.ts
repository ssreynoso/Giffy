import React from "react";
import { getGifs } from "@/services/getGifs";
import { Gif } from "@/types";

function useGifs(keyword?: string) {

    const [loading, setLoading] = React.useState(false);
    const [gifs, setGifs] = React.useState<Gif[]>([]);

    React.useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "Random";

        getGifs(keywordToUse, 30)
            .then((gifs) => {
                setGifs(gifs);
                setLoading(false);
                if (keyword) localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword]);

    return { loading, gifs };
}

export default useGifs;