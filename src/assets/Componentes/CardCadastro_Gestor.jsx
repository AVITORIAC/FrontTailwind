import React, { useState } from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import { Link } from 'react-router-dom'

function CardCadastro_Gestor() { //CARD PARA CADASTRO DO GESTOR

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [edv, setEdv] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')

    const cadastrar = (e) => {
        console.log('nome:', nome)
        console.log('email:', email)
        console.log('senha:', senha)
        console.log('confirmar:', confirmar)
    }

    return (
        <div className={'bg-white relative mt-20 w-9/12 h-fit xl:h-5/6 2xl:w-7/12 3xl:w-6/12 pb-8'}>
            <img src={logoBosch} alt="" />
            <div className={'flex justify-center mt-7 mb-8'}>
                <Titulo h1='CADASTRO'></Titulo>
            </div>
            <div className={'flex justify-evenly items-center sm:flex-col lg:flex-row'}>
                <div className={'flex flex-col gap-8'}>
                    <InputRoxo label='Nome completo' value={nome} onChange={(e) => { setNome(e.target.value) }}> </InputRoxo>
                    <InputRoxo label='Email' value={email} onChange={(e) => { setEmail(e.target.value) }}> </InputRoxo>
                    <InputRoxo label='EDV' value={edv} onChange={(e) => { setEdv(e.target.value) }}> </InputRoxo>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <InputRoxo type='password' label='Senha ' value={senha} onChange={(e) => { setSenha(e.target.value) }}> </InputRoxo>
                    <InputRoxo type='password' label='Confirma senha' value={confirmar} onChange={(e) => { setConfirmar(e.target.value) }}> </InputRoxo>
                </div>
            </div>
            <div className={'flex justify-center mt-10'}>
                <Botaoroxo onClick={cadastrar} txt='CRIAR'></Botaoroxo>
            </div>

        </div>
    )
}

export default CardCadastro_Gestor
