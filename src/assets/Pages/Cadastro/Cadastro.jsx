import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro from '../../Componentes/CardCadastro'


function Cadastro() {
  return (
    <div className={'flex items-center justify-center'}>
      <img src={fundo} className={'w-full flex absolute'} alt="" />
      <CardCadastro></CardCadastro>
    </div>
  )
}


export default Cadastro
