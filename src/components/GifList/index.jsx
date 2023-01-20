import GifItem from "../GifItem";
import "./GifList.css";

function GifList({gifs}) {

    return (
        <div className="GifList">
            {gifs.map(({ title, id, url }) => (
                <GifItem 
                    key   = { id }
                    id    = { id } 
                    title = { title } 
                    url   = { url }
                />
            ))}
        </div>
    );
}

export default GifList;