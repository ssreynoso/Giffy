import { Route } from "wouter";
import SearchResults   from "@/pages/SearchResults";
import Home            from "@/pages/Home";

function Router() {
    return (
        <>  
            <Route 
                path      = "/"
                component = {Home}
            />
            <Route 
                path      = "/search/:keyword"
                component = {SearchResults}
            />
        </>
    )
}

export default Router;