import "./NavBar.css"
import { Link } from "wouter";
import GifSearch from "@/components/GifSearch";
import GifTrending from "../GifTrending";

function NavBar() {
    return (
        <div className="NavBar__container">
            <Link to="/">
                <h1 className="NavBar__title">Busca un gif</h1>
            </Link>
            <GifSearch />
            <GifTrending />
        </div>
    );
}

export default NavBar;
