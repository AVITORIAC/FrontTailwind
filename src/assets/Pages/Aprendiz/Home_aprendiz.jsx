import React from 'react'
import img1 from '../../Imgs/img1.png'
import img2 from '../../Imgs/img2.png'
import Botao from '../../Componentes/Botao'


function Home_aprendiz() {
    return (
        <div className={'ml-7'}>
            <div className={'flex mt-7'}>
                <img src={img1} alt="" />
                <div className={'ml-6'}>
                    <h1 className={'font-bold text-fonte text-2xl'}>Preencher auto avaliação</h1>
                    <p className={'mt-5'}>A auto avaliação é feita aos finais dos semestres pelos aprendizes. Esse é o momento em que você avalia sua jornada durantes 6 meses de acordo com os critérios no formulário. Para isso, basta clicar no botão abaixo:</p>
                    <div className={'flex justify-end mr-10 mt-10'}>
                    <Botao txt='PREENCHER'></Botao>
                    </div>
                </div>
            </div>
            <div className={'flex mt-7'}>
                <img src={img2} alt="" />
                <div className={'ml-6'}>
                    <h1 className={'font-bold text-fonte text-2xl'}>Acompanhar rendimento</h1>
                    <p className={'mt-5'}>O rendimento é medido de acordo com as suas notas em feedbacks anteriores completos. Os feedbacks completos são aqueles em que o instrutor aprensentou e discutiu suas notas. Dessa forma, clique no botão abaixo para visualizar seu rendimento:</p>
                    <div className={'flex justify-end mr-10 mt-10'}>
                    <Botao txt='ACOMPANHAR'></Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_aprendiz
