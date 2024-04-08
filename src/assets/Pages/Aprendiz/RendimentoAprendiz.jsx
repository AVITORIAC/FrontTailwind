import Chart from '../../Componentes/Chart'
import Titulo from '../../Componentes/Titulo'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'
import { Link } from 'react-router-dom'
import React, { useState } from "react";
 
function RendimentoAprendiz() {
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']
 
    const [semes, setSemes] = useState('')
    const [semes1, setsemes1] = useState('')
 
    const visualizar = (e) => {
        console.log('semestre:', semes)
        console.log('semestre:', semes1)
    }
    return (
        <div className={'flex flex-col gap-6 ml-6'}>
            <Titulo h1='RENDIMENTO'></Titulo>
            <h2>Bem-vindo(a) ao seu rendimento, aqui você consegue acompanhar sua evolução entre os semestres de acordo os principais critérios.</h2>
            <div className={'flex justify-center gap-16 mt-5'}>
                <Filtro id='semestre' optionList={semestre} value={semes} onChange={(e) => (setSemes(e.target.value))}></Filtro>
                <Filtro id='semestre' optionList={semestre} value={semes1} onChange={(e) => (setsemes1(e.target.value))}></Filtro>
                <Link onClick={visualizar}><Botao txt='VERIFICAR'></Botao></Link>
            </div>
            <div className={'flex justify-center mt-5'}>
                <Chart></Chart>
            </div>
        </div>
    )
}
 
export default RendimentoAprendiz