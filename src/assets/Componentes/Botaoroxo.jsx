import React from 'react'


function Botaoroxo(props) {
  return (
    <div>
      <button onClick={props.onClick} className={`h-12 w-32 text-white bg-roxo`}>{props.txt}</button>
    </div>
  )
}

export default Botaoroxo
