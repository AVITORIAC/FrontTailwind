import React from 'react'
import Filtro from '../../Componentes/Filtro'
import Input from '../../Componentes/Input'
import Botao from '../../Componentes/Botao'
import { HiMagnifyingGlass } from "react-icons/hi2";

function Criterios() { //TELA PARA CADASTROS DE CRITERIOS
    
    let curso = ['Digital Solutions', 'Mecatrônica', 'Manufatura Digital']
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']

    return (
        <div className={`flex flex-col h-full justify-around mx-10 gap-3`}>
            <h1 className={`text-2xl font-bold`}>CRITÉRIO</h1>
            <h2 className={`text-lg font-bold`}>Cadastrar critério</h2>
            <p className={`text-base font-semibold`}>Preencha as informações abaixo para adicionar um novo critério: </p>
            <Filtro id="curso" label='Selecione o curso que possui esse critério.' optionList={curso}></Filtro>
            <Input label='Nome do critério'></Input>
            <Input label='Descrição do critério: ajuda o aprendiz ou instrutor a saber mais informações'></Input>
            <Filtro id="semestre" label='Selecione o(os) semestre(s) que esse critério deve aparecer.' optionList={semestre} ></Filtro>
            <div className={'flex justify-end'}>
                <Botao txt='CADASTRAR'></Botao>
            </div>
            <h2 className={`text-lg font-bold`}>Editar ou excluir critério</h2>
            <div className={'flex items-center gap-2'}>
                <Input label='Pesquise pelo critério que deseja editar ou excluir'></Input>
                <HiMagnifyingGlass className={`size-8 fill-blue-400 mt-5`} />
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Inglês</p>
                <p className={`text-base font-bold`}>Técnico em Desenvolvimento de Sistemas </p>
                <p className={`text-base font-bold`}>Vanessa Silva </p>
                <p className={`text-base font-bold`}>EDITAR </p>
                <p className={`text-base font-bold`}>EXCLUIR </p>

            </div>
        </div>
    )
}

export default Criterios
