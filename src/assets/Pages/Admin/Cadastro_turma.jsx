import React from 'react'
import Input from '../../Componentes/Input'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'
import { HiMagnifyingGlass } from "react-icons/hi2";

function Cadastro_turma() {
  return (
    <div className={`flex flex-col h-full justify-around mx-10`}>
      <h1 className={`text-2xl font-bold `}>Turmas</h1>
      <h2 className={`text-lg font-bold`}>Cadastrar turmas</h2>
      <p className={`text-base`}>Preencha as informações abaixo para adicionar uma nova turma:</p>
      <Input label='Selecione o curso'></Input>
      <Input label='Nome da turma'></Input>
      <Filtro label='Selecione o padrinho ou a madrinha'></Filtro>

      <div className={'flex justify-end'}>
        <Botao txt='CADASTRAR'></Botao>
      </div>
      <h2 className={`text-lg font-bold`}>Editar turma</h2>
      <div className={'flex items-center gap-2'}>
        <Input label='Pesquise pela turma que deseja editar'></Input>
        <HiMagnifyingGlass className={`size-8 fill-blue-400 mt-5`} />
      </div>
      <div className={`w-full h-20 bg-barraedit flex gap-40 justify-center items-center `}>
        <p className={`text-lg font-bold`}>Digital solutions 6</p>
        <p className={`text-lg font-bold`}>Técnico em Desenvolvimento de Sistemas </p>
        <p className={`text-lg font-bold`}>Vanessa Silva </p>
        <p className={`text-lg font-bold`}>EDITAR </p>

      </div>
    </div>
  )
}

export default Cadastro_turma


