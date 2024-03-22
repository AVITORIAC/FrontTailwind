import React from 'react'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'


function Avaliacao_feedback() {
  return (
    <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>AUTO AVALIAÇÃO</h1>
            <Filtro id="turma" label='Selecione a turma' option1='DS6' option2='DS7' option3='DS8' option4='DS9' option5='DS10' option6='DS11' ></Filtro>
            <Filtro id="aprendiz" label='Selecione o aprendiz' option1='Eduarda Rabelo Oliveira' option2='Julia Roberta Veloso Guiraldeli' option3='Carlos Eduardo Faustino Barbosa'  ></Filtro>
            <Filtro id="semestre" label='Selecione o semestre' option1='1° Semestre' option2='2° Semestre' option3='3° Semestre'  ></Filtro>
            <div className={'flex justify-end'}>
                <Botao txt='FINALIZAR'></Botao>
            </div>
        </div>
  )
}

export default Avaliacao_feedback
