import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro_Aprendiz from '../../Componentes/CardCadastro_Aprendiz'

function Cadastro_de_Aprendiz() { //TELA DE CADASTRO DO APRENDIZ 
    return (
        <div className={'bg-cover bg-fundo 3xl:h-screen lg:h-screen '}>
            <div className={'flex items-center justify-center pb-20'}>
                {/* <img src={fundo} className={'w-fit h-fit flex absolute  '} alt="" /> */}
                <CardCadastro_Aprendiz />
            </div>
        </div>
    )
}

export default Cadastro_de_Aprendiz
