import React from 'react'
import Card from '../../Componentes/Card'
import { Link } from 'react-router-dom'


function HomeAdmin() { //TELA INICIAL DO ACESSO DE ADMINISTRADOR

  return (
    <div className={`flex flex-col w-full h-fit gap-20`}>
      <div className={`mx-auto w-full flex justify-evenly`}>
        <Link to='/Cadastro_aprendiz'><Card azul1 h1='Administrador' h2='Aprendizes' p='Aceitar o cadastro de novos aprendizes no sistema.' /></Link>
        <Link to='/Criterios'><Card azul2 h1='Administrador' h2='Critérios' p='Cadastre, edite ou exclua um critério de avaliação de um curso.' /></Link>
      </div>
      <div className={`mx-auto items-center`}>
        <Link to='/Cadastro_turma'> <Card azul3 h1='Administrador' h2='Turmas' p='Cadastre, edite ou exclua uma turma no sistema.' /></Link>
      </div>
    </div>
  )
}

export default HomeAdmin
