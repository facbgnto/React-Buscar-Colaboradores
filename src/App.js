import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import BuscarColaborador from "./Components/BuscarColaborador";

function App() {

  const [busqueda, setBusqueda] = useState(""); 
        // capturar valor del input
        const buscar = (e) => {
          setBusqueda(e.target.value);
          }  ;
  return (
    <div className="App">
            <nav className="navbar navbar-dark mb-4 p-3 bg-dark text-light">
              <span className="navbard-brand"> Buscar Colaboradores</span>
              <input onChange={buscar} type="text" placeholder="Buscar Colaborador" />
            </nav>
        
          <BuscarColaborador busqueda={busqueda}></BuscarColaborador>
    </div>
  );
}

export default App;
