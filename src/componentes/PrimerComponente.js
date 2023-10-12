import { useState } from "react";
import React from 'react'

const PrimerComponente = () => {

    //let nombre = "Manuel";
    let web = "holaquease.com";

    const [nombre, setNombre] = useState("manuel")

    let papitas = [ 
        "Chetos",
        "Doritos",
        "Taquis",
        "Tostitos",
        "Chips"

     ];

     const cambiarNombre = (nuevoNombre) =>{
        setNombre(nuevoNombre);
     }

  return (
    <div>
        <h1>Primer Componente</h1>
        <p>mi nombre es:<strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre }</strong></p>
        <p>mi web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="cambiar nombre"/>

        <button onClick={e => {console.log("el valor guardado en tu estado es: ", nombre);}}>mostrar estado</button>

        <button onClick={ e =>cambiarNombre("JOSE MANUEL ")}>
            cambiar nombre
        </button>

        <h2>Papitas</h2>

        <ul>
             {
                papitas.map( (papitas, indice) =>{
                    return (<li key={indice}>{papitas}</li>)
                })

                
             }
        </ul>
    </div>
  )
}

export default PrimerComponente
