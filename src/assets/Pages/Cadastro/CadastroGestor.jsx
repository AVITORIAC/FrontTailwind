import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro_Gestor from '../../Componentes/CardCadastro_Gestor'


function CadastroGestor() { //TELA DE CADASTRO DO GESTOR E INSTRUTOR
    return (
        <div className={'bg-cover bg-fundo 3xl:h-screen lg:h-screen'}>
            <div className={'flex items-center justify-center pb-20'}>

                {/* <img src={fundo} className={'w-full h-full flex absolute'} alt="" /> */}
                <CardCadastro_Gestor />
            </div>
        </div>
    )
}

export default CadastroGestor
