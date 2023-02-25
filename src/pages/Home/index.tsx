import Loading from "@/components/GifLoading";
import GifList from "@/components/GifList";
import useGifs from "@/hooks/useGifs";
import "./Home.css";
import { useTrending } from "@/hooks/useTrending";

function Home() {
    const GifAPI = "https://developers.giphy.com/docs/api/#quick-start-guide"

    const { gifs, loading } = useGifs();
    const { trendingGifs, trendingLoading } = useTrending();

    if (loading || trendingLoading) return <Loading />;

    return (
        <div className="Home__container">
            <h1>Consumo de la API <a href={GifAPI} target="_blank">Giffy</a></h1>
            <h3>Trending</h3>
            <section className="trendingGifs__container">
                <GifList gifs={trendingGifs} />
            </section>
            <h3>Last searched gifs</h3>
            <section className="mainContentGifs__container">
                <GifList gifs={gifs} />
            </section>
        </div>
    );
}

export default Home;
