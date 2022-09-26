import React, { useState } from "react";
import LoadTabla from "./LoadTabla";
import { BaseColaboradores } from "../dataBase/database";
import Colaborador from "./Colaborador";


const BuscarColaborador = ({busqueda}) => {
        const [colaboradores, setColaboradores] = useState(BaseColaboradores);
        
     console.log(busqueda)
               
          let resultado = [];

          if(busqueda === ""){    
            console.log(busqueda)
              resultado = colaboradores;   
          }else{
              resultado = !busqueda ? colaboradores : colaboradores.filter((dato)=> dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))   
              console.log(resultado) 
          }
         return (
          
          <>
             <Colaborador  colaboradores={colaboradores} setColaboradores={setColaboradores}></Colaborador>            
             <LoadTabla resultado={resultado}></LoadTabla> */          
          </>
        );
};

export default BuscarColaborador;
