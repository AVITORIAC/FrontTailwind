import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardRecuperarSenha from '../../Componentes/CardRecuperarSenha'

function RecuperarSenha() { //TELA PARA CODIGO DA RECUPERAÇÃO DE SENHA
    return (
        <div className={'bg-cover bg-fundo 3xl:h-screen lg:h-screen '}>
            <div className={'flex items-center justify-center pb-20'}>
                <CardRecuperarSenha />
            </div>
        </div >
    )
}

export default RecuperarSenha
