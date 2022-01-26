import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Acerca from "./Acerca";
import { Error404 } from "./Error404";
import { Direcciones } from "../components/Direcciones";
import { Usuario } from "./Usuario";

const ConceptosBasicos = () => {
  return (
    <div>
  
      <HashRouter>
        <nav>
          <NavLink to="/" activeClassName="active">HOME</NavLink>
          <NavLink to="/acerca" activeClassName="active">ACERCA</NavLink>
          <NavLink to="/login" activeClassName="active">LOGIN</NavLink>
        </nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/acerca" element={<Acerca />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error404 />} />
          </Routes>

      </HashRouter>
      {/* <p>conceptos basicos</p>
      <Router>
        <Direcciones />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/acerca" exact element={<Acerca />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default ConceptosBasicos;
