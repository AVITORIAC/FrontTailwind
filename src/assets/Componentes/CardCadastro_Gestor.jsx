import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'


function CardCadastro_Gestor() {
    let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']

    return (
        <div className={'bg-white relative mt-20 w-9/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex justify-center mt-7 mb-8'}>
                <Titulo h1='CADASTRO'></Titulo>
            </div>
            <div className={'flex justify-evenly items-center'}>
                <div className={'flex flex-col gap-8'}>
                    <InputRoxo label='Nome completo'> </InputRoxo>
                    <InputRoxo label='E-mail'> </InputRoxo>
                   
                </div>
                <div className={'flex flex-col gap-8'}>
                    <InputRoxo label='Senha'> </InputRoxo>
                    <InputRoxo label='Confirme a senha'> </InputRoxo>
                </div>

            </div>
            <div className={'flex justify-center mt-10'}>
                <Botaoroxo txt='CRIAR'></Botaoroxo>
            </div>

        </div>
    )
}

export default CardCadastro_Gestor
