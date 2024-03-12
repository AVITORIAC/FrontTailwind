import React from 'react'
import Card from '../../Componentes/Card'

function Home() {
  return (
    <div className={` flex justify-center `}>
      <div className={`flex `}> 
        <Card azul1 h1='Administrador' h2='Aprendizes' p='Aceitar o cadastro de novos aprendizes no sistema.' />
        <Card azul2 h1='Administrador' h2='Critérios' p='Cadastre, edite ou exclua um critério de avaliação de um curso.' />
      </div>
      {/* <div className={``}>
        
      </div> */}
      <div className={`p-5 `}>
        <Card azul3 h1='Administrador' h2='Turmas' p='Cadastre, edite ou exclua uma turma no sistema.' />
      </div>
    </div>
  )
}

export default Home
