import React from 'react'
import img1 from '../../Imgs/img1.png'
import img2 from '../../Imgs/img2.png'
import Botao from '../../Componentes/Botao'
import { Link } from 'react-router-dom'


function Home_aprendiz() { //FUNÇÃO DA TELA INICIAL DO ACESSO DE APRENDIZ
    return (
        <div className={'h-full flex flex-col justify-evenly border-4 border-blue-600'}>
            <div className={' flex p-10 justify-between border-4 border-green-500 '}>
                <div className={'flex w-10/12  border-4 border-yellow-300'}>
                    <img src={img1} alt="" />
                </div>
                <div className={'flex flex-col justify-center pr-3 gap-4 sm:p-2 border-4 border-pink-600'}>
                    <h1 className={'font-bold font-roboto text-fonte text-2xl sm:text-xl'}>Preencher auto avaliação</h1>
                    <p className={'font-roboto sm:text-sm md:text-base'}>A auto avaliação é feita aos finais dos semestres pelos aprendizes. Esse é o momento em que você avalia sua jornada durantes os 6 meses de acordo com os critérios no formulário. <br />Para isso, basta clicar no botão abaixo:</p>
                    <div className={'flex justify-end '}>
                        <Link to='/Auto_avaliacao'><Botao txt='PREENCHER'></Botao></Link>
                    </div>
                </div>
            </div>
            <div className={' flex border-4 border-green-500 '}>
                <div className={'flex w-10/12 justify-center border-4 border-yellow-300'}>
                    <img src={img2} alt="" />
                </div>
                <div className={'flex flex-col justify-center gap-4 sm:p-2  border-4 border-pink-600'}>
                    <h1 className={'font-roboto font-bold text-fonte text-2xl sm:text-xl'}>Acompanhar rendimento</h1>
                    <p className={'font-roboto sm:text-sm md:text-base'}>O rendimento é medido de acordo com as suas notas em feedbacks anteriores completos. Os feedbacks completos são aqueles em que o instrutor aprensentou e discutiu suas notas. <br />Dessa forma, clique no botão abaixo  para  visualizar seu rendimento:</p>
                    <div className={' flex justify-end'}>
                        <Link to='/RendimentoAprendiz'><Botao txt='ACOMPANHAR'></Botao></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_aprendiz
