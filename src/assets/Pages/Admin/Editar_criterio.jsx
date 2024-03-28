import React from 'react'
import Input from '../../Componentes/Input'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'

function Editar_criterio() {
    let curso = ['Digital Solutions', 'Mecatrônica', 'Manufatura Digital']
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre', 'Todos']

    return (
        <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>EDITAR CRITÉRIO </h1>
            <p className={`text-base`}>Preencha as informações abaixo para editar o critério:</p>
            <Filtro label='Selecione o curso que possui esse critério.' optionList={curso}></Filtro>
            <Input label='Nome do critério'></Input>
            <Input label='Descrição do critério: ajuda o aprendiz ou instrutor a saber mais informações.'> </Input>
            <Filtro label='Selecione o(os) semestre(s) que esse critério deve aparecer.' optionList={semestre} ></Filtro>
            <div className={'flex justify-end'}><Botao txt='SALVAR'></Botao></div>
        </div>
    )
}

export default Editar_criterio
