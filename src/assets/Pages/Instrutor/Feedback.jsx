import React from 'react'
import Filtro from '../../Componentes/Filtro'
import Card from '../../Componentes/Card'

function Feedback() {
    return (
        <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>FEEDBACK</h1>
            <Filtro id="turma" label='Selecione a turma' option1='DS6' option2='DS7' option3='DS8' option4='DS9' option5='DS10' option6='DS11' ></Filtro>
            <Filtro id="aprendiz" label='Selecione o aprendiz' option1='Eduarda Rabelo Oliveira' option2='Julia Roberta Veloso Guiraldeli' option3='Carlos Eduardo Faustino Barbosa'  ></Filtro>
            <div className={`flex flex-col items-end gap-4`}>
                <Card verde3 h1='Nota final' h2='3,6' p='Essa nota é calculada com base nos critérios dos instrutores.' />
                <Card verde1 h1='Instrutor' h2='Semestres anteriores' p='Acompanhar o desempenho em diferentes semestres' />
                <Card verde2 h1='Aprendiz' h2='Auto avaliação do aprendiz' p='Acompanhar a nota em cada critério do aprendiz' />

            </div>
        </div>
    )
}

export default Feedback
