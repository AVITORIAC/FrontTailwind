import React from 'react'
import Chart from '../../Componentes/Chart'
import Filtro from '../../Componentes/Filtro'
import Titulo from '../../Componentes/Titulo'

function RendimentoGestor() {
    let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']
    return (
        <div >
            <Titulo h1='RENDIMENTO'></Titulo>
            <div className={'flex justify-center gap-16 mt-10'}>
                <Filtro id="turma" label='Selecione a turma' optionList={turma} ></Filtro>
                <Filtro id="turma2" label='Selecione outra turma' optionList={turma} ></Filtro>
            </div>
            <div className={'flex justify-center mt-16'}>
                <Chart></Chart>
            </div>
        </div>
    )
}

export default RendimentoGestor
