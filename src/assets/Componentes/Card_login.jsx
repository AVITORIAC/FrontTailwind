import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import { Link } from 'react-router-dom'


function Card_login() { //CARD PARA TELA DE LOGIN 
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP sm:h-screen 3xl:w-5/12 3xl:h-screen6 '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-8'}>
                    <Titulo h1='LOGIN'></Titulo>
                </div>
                <div className={'flex flex-col gap-5 items-center'}>
                    <InputRoxo label='Email'> </InputRoxo>
                    <InputRoxo type='password' label='Senha'> </InputRoxo>
                    <Botaoroxo txt='ENTRAR'></Botaoroxo>
                </div>
            </div>
            <div className={'flex gap-2 justify-center mt-10'}>
                <p> Esqueceu a senha?</p>
                <Link to='/RecuperarSenha'><p> Recuperar</p></Link>
            </div>
            <div className={'flex gap-2 justify-center mt-3'}>
                <p> Ainda não possui uma conta? </p>
                <Link to='/Cadastro'> <p> Cadastre-se </p></Link>
            </div>
        </div>
    )
}

export default Card_login
