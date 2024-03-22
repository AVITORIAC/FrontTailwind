import React from 'react'
import Botao from '../../Componentes/Botao'
import Filtro from '../../Componentes/Filtro'
import Input from '../../Componentes/Input'

function Editar_turma() {
  let curso = ['Digital Solutions', 'Mecatrônica', 'Manufatura Digital']
  let instrutor = ['Vanessa Silva', 'Cleber', 'Ianella', 'Leonardo', 'Luca']
  return (
    <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
      <h1 className={`text-2xl font-bold`}>EDITAR TURMA </h1>
      <p className={`text-base`}>Preencha as informações abaixo para editar a turma:</p>
      <Filtro label='Selecione o curso.' optionList={curso} ></Filtro>
      <Input label='Nome da turma'></Input>
      <Filtro label='Selecione o padrinho ou a madrinha.' optionList={instrutor}></Filtro>
      <div className={'flex justify-end'}><Botao txt='SALVAR'></Botao></div>
      
    </div>
  )
}

export default Editar_turma
