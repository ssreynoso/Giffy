import "./NavBar.css"
import { Link } from "wouter";
import GifSearch from "@/components/GifSearch";
import GifCategories from "@/components/GifCategories";

function NavBar() {
    return (
        <div className="NavBar__container">
            <Link to="/">
                <h1 className="NavBar__title">Busca un gif</h1>
            </Link>
            <GifSearch />
            <GifCategories />
        </div>
    );
}

export default NavBar;
