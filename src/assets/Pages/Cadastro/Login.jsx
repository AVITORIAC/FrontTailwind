import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import Card_login from '../../Componentes/Card_login'



function Login() { //TELA DE LOGIN
    return (
        <div className={'bg-cover bg-fundo 3xl:h-screen lg:h-screen '}>
            <div className={'flex items-center justify-center pb-20'}>
                <Card_login></Card_login>
            </div>
        </div>
    )
}

export default Login


