import React from 'react'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'

function Avaliacao() {
    let aprendiz = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']
    let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']

    return (
        <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>AVALIAÇÃO</h1>
            <Filtro id='turma' label='Selecione a turma' optionList={turma}></Filtro>
            <Filtro id='aprendiz' label='Selecione o aprendiz' optionList={aprendiz}></Filtro>
            <Filtro id='semestre' label='Selecione o semestre' optionList={semestre}></Filtro>
            
            <div className={'flex justify-end'}>
                <Botao txt='FINALIZAR'></Botao>
            </div>
        </div>
    )
}

export default Avaliacao
