import "./GifSearch.css"
import { useState }    from "react";
import { useLocation } from "wouter";

const GifSearch = function () {
    
    const [ searchValue, setSearchValue ] = useState("");
    const [path, push]                    = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        push(`/search/${searchValue}`);
    }
    
    const handleChange = (event) => {
        setSearchValue(event.target.value.toString());
    }

    return (
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
    );
};

export default GifSearch;
