import React from 'react'
import PrimerComponente from './PrimerComponente'

const SegundoComponente = () => {
  return (
    <div>
      <h1>Segundo Componente</h1>
      <ul>
        <li>hola 1</li>
        <li>hola 2</li>
        <li>hola 3</li>
      </ul>
      <PrimerComponente />
    </div>
    
  )
}

export default SegundoComponente
