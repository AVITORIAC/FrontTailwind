import React from 'react'

function Botao(props) {
  return (
    <div>
        <button onClick={props.onClick} className={`h-12 w-32 border-2 border-fonte`}>{props.txt}</button>
    </div>
  )
}

export default Botao
