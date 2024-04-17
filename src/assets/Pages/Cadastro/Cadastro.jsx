import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import CardCadastro from '../../Componentes/CardCadastro'


function Cadastro() { //TELA DE ESCOLHA DO CARGO PARA CADASTRO
  return (
    <div className={'bg-cover bg-fundo 3xl:h-screen lg:h-screen'}>
      <div className={'flex items-center justify-center pb-20'}>
        {/* <img src={fundo} className={'w-full flex absolute sm:h-full '} alt="" /> */}
        <CardCadastro></CardCadastro>
      </div>
    </div>
  )
}


export default Cadastro
