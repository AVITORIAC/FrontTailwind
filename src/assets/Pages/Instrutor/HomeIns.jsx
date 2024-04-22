import React from 'react'
import Card from '../../Componentes/Card'
import { Link } from 'react-router-dom'


function HomeIns() { //TELA INICIAL DO ACESSO DE INSTRUTOR
  return (
    <div className={`flex flex-col w-full h-fit gap-20`}>
      <div className={`mx-auto w-full flex justify-evenly sm:flex-col`}> 
        <Link to='/Avaliacao'><Card verde1 h1='Instrutor' h2='Avaliar turma' p='Acesse a avaliação de cada aprendiz de uma turma.' /></Link>
        <Link to='/Rendimento_instrutor'><Card verde2 h1='Instrutor' h2='Acompanhar progresso' p='Acesse os gráficos de desempenho dos aprendizes.' /></Link>
      </div>
      <div className={`mx-auto w-full flex justify-evenly sm:flex-col`}>
      <Link to='/Feedback'><Card verde3 h1='Instrutor' h2='Realizar feedback' p='Mostrar e discutir os resultados do aprendiz no feedback. ' /></Link>
      <Link to='/Observacoes'><Card verde4 h1='Instrutor' h2='Nota' p='Adicione observações sobre um aprendiz.' /></Link>
      </div>
    </div>
  )
}

export default HomeIns


// h-full flex flex-col justify-between