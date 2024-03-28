import React from 'react'
import Chart from '../../Componentes/Chart'
import Titulo from '../../Componentes/Titulo'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'


function RendimentoAprendiz() {
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']
    return (
        <div className={'flex flex-col gap-6 ml-6'}>
            <Titulo h1='RENDIMENTO'></Titulo>
            <h2>Bem-vindo(a) ao seu rendimento, aqui você consegue acompanhar sua evolução entre os semestres de acordo os principais critérios.</h2>
            <div className={'flex justify-center gap-16 mt-5'}>
                <Filtro id='semestre' optionList={semestre}></Filtro>
                <Filtro id='semestre' optionList={semestre}></Filtro>
                <Botao txt='VERIFICAR'></Botao>
            </div>
            <div className={'flex justify-center mt-5'}>
                <Chart></Chart>
            </div>
        </div>
    )
}

export default RendimentoAprendiz
