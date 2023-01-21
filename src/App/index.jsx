import "./App.css";
import Router from "@/components/Router";
import NavBar from "@/components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <section className="App-content">
                <Router />
            </section>
        </div>
    );
}

export default App;
