import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";


function App() {
  return (
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
        <h1>React Routes Navbar</h1>
        <hr></hr>
        <Switch>
          <Route path="/nosotros/:id">
            <User></User>
          </Route>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/nosotros">
            <Nosotros></Nosotros>
          </Route>
          <Route path="/" exact>
            <Inicio></Inicio>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
