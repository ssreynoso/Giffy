import Loading from "@/components/GifLoading";
import GifList from "@/components/GifList";
import useGifs from "@/hooks/useGifs";
import "./Home.css";

function Home() {
    const { gifs, loading } = useGifs();

    if (loading) return <Loading />;

    return <GifList gifs={gifs} />;
}

export default Home;
