import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro_Aprendiz from '../../Componentes/CardCadastro_Aprendiz'

function Cadastro_Aprendiz() {
    return (
        <div className={'flex items-center justify-center'}>
            <img src={fundo} className={'w-full flex absolute'} alt="" />
           <CardCadastro_Aprendiz/>
        </div>
    )
}

export default Cadastro_Aprendiz
