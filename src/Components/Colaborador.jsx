import React, { useState } from "react";

  const Colaborador = ({colaboradores, setColaboradores}) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  //controladore de los eventos 
  const handleOnChangeNombre = (e)=> setNombre(e.target.value)
  const handleOnChangeCorreo = (e)=> setCorreo(e.target.value)
  const handleOnSubmit = (e)=>{
    e.preventDefault(); 
    const nuevoColaborador ={
        id: Date.now(),
        nombre: nombre,
        correo: correo
    }
    setColaboradores([...colaboradores, nuevoColaborador]);
 
    console.log(colaboradores)
}

  return (
    <form className="mb-4 p-3 border border-3 border-dark rounded" onSubmit={ handleOnSubmit}>
      <div className="mb-2">
        <label htmlFor="nombre"> Nombre del Colaborador</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre Colaborador"
          onChange={handleOnChangeNombre}
        ></input>
      </div>
      <div className="mb-2">
        <label htmlFor="correo"> Correo del Colaborador</label>
        <input
          type="email"
          name="correo"
          className="form-control"
          placeholder="Ingrese Correo"
          onChange={handleOnChangeCorreo}
        ></input>
      </div>
      <div className="mb-2">
        <button type="subnit" className="w-100 btn btn-primary btn-dark">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Colaborador;
