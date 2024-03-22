import React from 'react'
import Card from '../../Componentes/Card'

function Home() {
  return (
    <div className={`flex flex-col w-full h-fit gap-20`}>
      <div className={`mx-auto w-full flex justify-evenly`}> 
        <Card azul1 h1='Administrador' h2='Aprendizes' p='Aceitar o cadastro de novos aprendizes no sistema.' />
        <Card azul2 h1='Administrador' h2='Critérios' p='Cadastre, edite ou exclua um critério de avaliação de um curso.' />
      </div>
      <div className={`mx-auto items-center`}>
        <Card azul3 h1='Administrador' h2='Turmas' p='Cadastre, edite ou exclua uma turma no sistema.' />
      </div>
    </div>
  )
}

export default Home
