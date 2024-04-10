import React, { useState } from "react";
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'
import { Link } from 'react-router-dom'
import Chart from "../../Componentes/Chart";


function Rendimento_instrutor() { //TELA PARA VISUALIZAR O RENDIMENTO DO APRENDIZ

  let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']
  let aprendiz = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']
  let tipo = ['Auto Avaliação', 'Avaliação']
  let criterios = ['Profissionalismo', 'ingles', 'Conhecimento teorioco']
  let aprendiz2 = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']


  const [turmas, setTurmas] = useState('')
  const [aluno, setAluno] = useState('')
  const [tipos, setTipos] = useState('')
  const [criterio, setCriterio] = useState('')
  const [aluno2, setAluno2] = useState('')

  const finalizar = (e) => {
    console.log('turma:', turmas)
    console.log('Aprendiz:', aluno)
    console.log('tipos:', tipos)
    console.log('criterio:', criterio)
    console.log('aluno2:', aluno2)
  }
  return (
    <div className={`flex flex-col h-full`}>
      <h1 className={`text-2xl font-bold ml-10 `}>RENDIMENTO</h1>
      <p className={`text-base ml-10 mt-3`}>Utilize os filtros para comparar alunos de acordo com critérios específicos.</p>
      <div className={'flex items-center flex-col mt-10'}>
        <div className={'flex justify-around items-center w-9/12 mb-8'}>
          <div className={'flex flex-col justify-around h-40'}>
            <Filtro id='turma' label='Selecione a turma' optionList={turma} value={turmas} onChange={(e) => (setTurmas(e.target.value))}></Filtro>
            <Filtro id='aprendiz' label='Selecione o aprendiz' optionList={aprendiz} value={aluno} onChange={(e) => (setAluno(e.target.value))}></Filtro>

          </div>
          <div className={'flex flex-col justify-around h-40'}>
            <Filtro id='tipoCriterio' label='Selecione o tipo de criterio' optionList={tipo} value={tipos} onChange={(e) => (setTipos(e.target.value))}></Filtro>
            <Filtro id='criterio' label='Selecione o critério' optionList={criterios} value={criterio} onChange={(e) => (setCriterio(e.target.value))}></Filtro>

          </div>
          <div className={'flex flex-col justify-around items-end h-40'}>
            <Filtro id='aluno2' label='Selecione outro aprendiz' optionList={aprendiz2} value={aluno2} onChange={(e) => (setAluno2(e.target.value))}></Filtro>
            <Link><Botao txt='FINALIZAR' onClick={finalizar}></Botao></Link>
          </div>
        </div>
        <div className={'flex justify-center '}>
          <Chart></Chart>
        </div>
      </div>
    </div>
  )
}

export default Rendimento_instrutor