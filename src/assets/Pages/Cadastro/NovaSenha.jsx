import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardNovaSenha from '../../Componentes/CardNovaSenha'

function NovaSenha() {
    return (
        <div className={'flex items-center justify-center'}>
            <img src={fundo} className={'w-full flex absolute'} alt="" />
            <CardNovaSenha/>
        </div>
    )
}

export default NovaSenha
