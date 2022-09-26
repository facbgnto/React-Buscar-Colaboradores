import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BaseColaboradores } from "./dataBase/database";
import { useState } from "react";
import Colaborador from "./Components/Colaborador";
import BuscarColaborador from "./Components/BuscarColaborador";
import LoadTabla from "./Components/LoadTabla";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
 

  return (
    <div className="App">
      <BuscarColaborador colaboradores={colaboradores}></BuscarColaborador>
      <Colaborador  colaboradores={colaboradores} setColaboradores={setColaboradores}></Colaborador>

  
    </div>
  );
}

export default App;
