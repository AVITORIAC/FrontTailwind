import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro from '../../Componentes/CardCadastro'


function Cadastro() { //TELA DE ESCOLHA DO CARGO PARA CADASTRO
  return (
    <div className={'flex items-center justify-center h-full'}>
      <img src={fundo} className={'w-full flex absolute sm:h-full '} alt="" />
      <CardCadastro></CardCadastro>
    </div>
  )
}


export default Cadastro
