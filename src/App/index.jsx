import React           from "react";
import SearchResults   from "../pages/SearchResults";
import Home            from "../pages/Home";
import { Link, Route } from "wouter";
import "./App.css";

function App() {

    return (
        <div className="App">
            <section className="App-content">
                <Link to="/">
                    <h1 className="App-title">Busca un gif</h1>
                </Link>
                <Route 
                    path      = "/"
                    component = {Home}
                />
                <Route 
                    path      = "/search/:keyword"
                    component = {SearchResults}
                />
            </section>
        </div>
    );
}

export default App;
