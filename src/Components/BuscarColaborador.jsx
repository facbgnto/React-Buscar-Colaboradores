import React, { useState } from "react";
import LoadTabla from "./LoadTabla";


const BuscarColaborador = ({colaboradores}) => {

      const [busqueda, setBusqueda] = useState("");
     
        // capturar valor del input
        const buscar = (e) => {
          setBusqueda(e.target.value);
          }  ;

        
          const resultado = !busqueda ? colaboradores : colaboradores.filter((dato)=> dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))
      
         return (
          
          <>
            <nav className="navbar navbar-dark mb-4 p-3 bg-dark text-light">
              <span className="navbard-brand"> Buscar Colaboradores</span>
              <input onChange={buscar} type="text" placeholder="Buscar Colaborador" />
            
            </nav>
                      
          <LoadTabla resultado={resultado}></LoadTabla> */
          

          
          </>
        );
};

export default BuscarColaborador;
