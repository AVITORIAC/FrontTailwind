import React, { useState } from "react";
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'
import { Link } from 'react-router-dom'
import Chart from "../../Componentes/Chart";

function Rendimento_Feedback() { // FUNÇÕES DA TELA DE RENDIMENTO DO(S) APRENDIZ(S) NO ACESSO DO INSTRUTOR
    let tipo = ['Auto Avaliação', 'Avaliação']
    let criterios = ['Profissionalismo', 'ingles', 'Conhecimento teorioco']

    const [tipos, setTipos] = useState('')
    const [criterio, setCriterio] = useState('')

    const finalizar = (e) => {
        console.log('tipos:', tipos)
        console.log('criterio:', criterio)

    }
    return (
        <div className={`flex flex-col h-full`}>
            <h1 className={`text-2xl font-bold ml-10 `}>RENDIMENTO</h1>
            <p className={`text-base ml-10 mt-3`}>Utilize os filtros para comparar a evolução do aprendiz de acordo com o critério.</p>
            <div className={'flex items-center flex-col mt-10'}>
                <div className={'flex justify-evenly items-end w-8/12 '}>
                    <Filtro id='tipoCriterio' label='Selecione o tipo de criterio' optionList={tipo} value={tipos} onChange={(e) => (setTipos(e.target.value))}></Filtro>
                    <Filtro id='criterio' label='Selecione o critério' optionList={criterios} value={criterio} onChange={(e) => (setCriterio(e.target.value))}></Filtro>
                    <Link><Botao txt='FINALIZAR' onClick={finalizar}></Botao></Link>
                </div>

            </div>
            <div className={'flex justify-center mt-14'}>
                <Chart></Chart>
            </div>
        </div>
    )
}

export default Rendimento_Feedback
