import GifItem from "@/components/GifItem";
import { Gif } from "@/types";
import "./GifList.css";

type GifListProps = {
    gifs: Gif[];
}

function GifList({ gifs }: GifListProps) {

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