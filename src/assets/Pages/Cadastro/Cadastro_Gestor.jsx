import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro_Gestor from '../../Componentes/CardCadastro_Gestor'


function CadastroGestor() {
    return (
        <div className={'flex items-center justify-center'}>
            <img src={fundo} className={'w-full flex absolute'} alt="" />
            <CardCadastro_Gestor/>
        </div>
    )
}

export default CadastroGestor
