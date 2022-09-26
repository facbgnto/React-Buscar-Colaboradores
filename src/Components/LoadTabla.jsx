import React, { useState } from "react";

const LoadTabla = ({ resultado, colaboradores }) => {
  if (resultado === undefined) {


  } else {
    console.log(resultado);
    return (
      <div>
            <table className="table table-striped table-hover mt-5 shadow-lg">
            <thead>
              <tr className="bg-dark text-white">
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
                {resultado.map((colaborador) => (
                    <tr key={colaborador.id.toString()} className="bg-light mb-2 rounded" >
                        <td>{colaborador.nombre.toLowerCase()}</td>
                        <td>{colaborador.correo}</td>
                      </tr>
                    ))}
            </tbody>

        </table>

      </div>
    );
  }
};

export default LoadTabla;
