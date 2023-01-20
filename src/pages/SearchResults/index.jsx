import React   from "react";
import Loading from "../../components/GifLoading";
import useGifs from "../../hooks/useGifs";
import GifList from "../../components/GifList";

function SearchResults({ params }) {

    const keyword = params.keyword;

    const { gifs, loading } = useGifs(keyword);

    if (loading) return <Loading />;

    return (
        <GifList gifs={gifs}/>
    );
}

export default SearchResults;
