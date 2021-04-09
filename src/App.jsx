// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// Components
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";


function App() {
  return (
    /* Define routes wraping all App with <Router> tag, <Link> defines a single route in a button type ('a' HTML tag), and <Switch>
    allows to define which component will response once enter to Route path */
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink
            to="/contacto"
            className="btn btn-dark"
            activeClassName="active"
          >
            Contacto
          </NavLink>
        </div>
        <h1>React / Routes / AoE API / fetch</h1>
        <hr />
        <Switch>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
