import Loading from "@/components/GifLoading";
import useGifs from "@/hooks/useGifs";
import GifList from "@/components/GifList";

type SearchResultsProps = {
    params: {
        keyword: string;
    };
}

function SearchResults({ params }: SearchResultsProps) {

    const { keyword } = params;

    const { gifs, loading } = useGifs(keyword);

    if (loading) return <Loading />;

    return (
        <GifList gifs={gifs}/>
    );
}

export default SearchResults;
