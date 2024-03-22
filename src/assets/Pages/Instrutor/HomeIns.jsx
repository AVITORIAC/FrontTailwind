import React from 'react'
import Card from '../../Componentes/Card'


function HomeIns() {
  return (
    <div className={`flex flex-col w-full h-fit gap-20`}>
      <div className={`mx-auto w-full flex justify-evenly`}> 
        <Card verde1 h1='Instrutor' h2='Avaliar turma' p='Acesse a avaliação de cada aprendiz de uma turma.' />
        <Card verde2 h1='Instrutor' h2='Acompanhar progresso' p='Acesse os gráficos de desempenho dos aprendizes.' />
      </div>
      <div className={`mx-auto w-full flex justify-evenly`}>
        <Card verde3 h1='Instrutor' h2='Realizar feedback' p='Mostrar e discutir os resultados do aprendiz no feedback. ' />
        <Card verde4 h1='Instrutor' h2='Nota' p='Adicione observações sobre um aprendiz.' />
      </div>
    </div>
  )
}

export default HomeIns


// h-full flex flex-col justify-between