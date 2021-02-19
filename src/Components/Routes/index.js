import { Router, Switch, Route } from "react-router-dom";
import history from "../../history";
import Home from "../Home";
import Create_Survey from "../Create_Survey";
import Take_Survey from "../Take_Survey";

const Routes = ()=>{
    return (
        <Router history={history}>
            <Switch>
                <Route path="/create" exact>
                    <Create_Survey />            
                </Route>
                <Route path="/take" exact>
                    <Take_Survey />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;