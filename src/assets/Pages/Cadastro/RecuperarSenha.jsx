import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardRecuperarSenha from '../../Componentes/CardRecuperarSenha'

function RecuperarSenha() {
    return (
        <div className={'flex items-center justify-center'}>
            <img src={fundo} className={'w-full flex absolute'} alt="" />
            <CardRecuperarSenha/>
        </div>
    )
}

export default RecuperarSenha
