import { useState }    from "react";
import { useLocation } from "wouter";
import Loading         from "../../components/GifLoading";
import GifList         from "../../components/GifList";
import useGifs         from "../../hooks/useGifs";
import "./Home.css";

function Home() {

    const [ searchValue, setSearchValue ] = useState("");
    const [path, push]                    = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        push(`/search/${searchValue}`);
    }
    
    const handleChange = (event) => {
        setSearchValue(event.target.value.toString());
    }
    
    const { gifs, loading } = useGifs();

    if (loading) return <Loading />;

    return (
        <>
            <form onSubmit={handleSubmit} className="App-search_container">
                <input
                    className   = "App-searcher"
                    placeholder = "Busque un gif"
                    value       = { searchValue }
                    onChange    = { handleChange }
                    maxLength   = { 30 }
                />
                <button className="App-search_button">Buscar</button>
            </form>

            <GifList gifs={gifs}/>
        </>
    );
}

export default Home;