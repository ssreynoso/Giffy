import { useCategories } from "@/hooks/useCategories";
import "./GifCategories.css";

function GifCategories() {

    const { loading, categories } = useCategories();

    if (loading) return null;

    return (
        <div className="GifCategories__container">
            <h3>Categories</h3>
            <ul className="GifCategories__list">
                { categories.map(category => <li>{category.name}</li>) }
            </ul>
        </div>
    )
}

export default GifCategories