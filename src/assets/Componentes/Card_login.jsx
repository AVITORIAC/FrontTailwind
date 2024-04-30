import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import { Link } from 'react-router-dom'


function Card_login() { //CARD PARA TELA DE LOGIN 
    return (
        <div className={'bg-white relative mt-20 w-9/12 h-full xl:h-5/6 2xl:w-7/12 3xl:w-6/12 pb-8 sm:w-4/6 sm:h-fit sm:mt-2 md:w-5/6 md:mt-2 md:h-fit'}>
            <img className={'sm:w-32 xl:w-56'} src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-8'}>
                    <Titulo h1='LOGIN'></Titulo>
                </div>
                <div className={'flex flex-col gap-5 items-center'}>
                    <InputRoxo label='EDV'> </InputRoxo>
                    <InputRoxo label='Senha'> </InputRoxo>
                    <Botaoroxo txt='ENTRAR'></Botaoroxo>
                </div>

            </div>
            <div className={'flex gap-2 justify-center mt-10'}>
                <p> Esqueceu a senha?</p>
                <Link to='/RecuperarSenha'><p className={'underline decoration-solid '}> Recuperar</p></Link>
            </div>
            <div className={'flex gap-2 justify-center mt-3 sm:'}>
                <p> Ainda não possui uma conta? </p>
                <Link to='/Cadastro'> <p className={'underline decoration-solid '}> Cadastre-se </p></Link>
            </div>
        </div>
    )
}

export default Card_login
