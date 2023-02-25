import React from "react";
import "./GifItem.css"

function GifItem({ title, id, url }) {
    return (
        <a 
            href={`#${id}`} 
            className="GifItem"
        >
            <h3>{ title }</h3>
            <h5>{ id }</h5>
            <img alt={title} src={url}/>
        </a>
    );
}

export default GifItem;