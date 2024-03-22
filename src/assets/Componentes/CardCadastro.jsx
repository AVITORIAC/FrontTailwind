import React from 'react'
import Botaoroxo from './Botaoroxo'
import Input from './Input'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'

function CardCadastro() {
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-14'}>
                    <Titulo h1='SELECIONE SEU CARGO'></Titulo>
                </div>
                <div className={'flex flex-col gap-4 items-center'}>
                    <Botaoroxo txt='APRENDIZ'></Botaoroxo>
                    <Botaoroxo txt='INSTRUTOR'></Botaoroxo>
                    <Botaoroxo txt='GESTOR'></Botaoroxo>
                </div>
            </div>
        </div>
    )
}

export default CardCadastro
