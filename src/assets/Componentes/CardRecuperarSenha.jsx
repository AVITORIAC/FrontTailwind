import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'


function CardRecuperarSenha() {
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-3'}>
                    <Titulo h1='RECUPERAR SENHA'></Titulo> 
                </div>
                <div className={'flex flex-col gap-5 mt-5 items-center'}>
                    <h2 className={'font-semibold'}>Digite abaixo o código enviado no seu email: allana123@gmail.com <br/> para recuperar sua senha</h2>
                    <InputRoxo> </InputRoxo>

                    <Botaoroxo txt='VERIFICAR'></Botaoroxo>
                </div>
            </div>
        </div>
    )

}




export default CardRecuperarSenha
