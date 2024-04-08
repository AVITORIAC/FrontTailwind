import React from 'react'
import { Link } from 'react-router-dom'

function Cadastro_aprendiz() { //FUNÇÃO DA TELA DE ACEITAR OS CADASTROS
    const aceitar = () => {
        console.log('Solicitação aceita')
    }
    const recusar = () => {
        console.log('Solicitação recusada')
    }

    return (
        <div className={`flex flex-col h-full gap-6 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>GERENCIAR APRENDIZES</h1>
            <h2 className={`text-lg font-bold`}>Novos cadastros</h2>
            <p className={`text-base font-semibold`}>Analise as informações e aceite ou recuse os novos aprendizes na plataforma através dos botões. </p>

           
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Eduarda Rabelo Oliveira </p>
                <p className={`text-base font-bold`}>Digital solutions 6</p>
                <p className={`text-base font-bold`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Eduarda Rabelo Oliveira </p>
                <p className={`text-base font-bold`}>Digital solutions 6</p>
                <p className={`text-base font-bold`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Eduarda Rabelo Oliveira </p>
                <p className={`text-base font-bold`}>Digital solutions 6</p>
                <p className={`text-base font-bold`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Eduarda Rabelo Oliveira </p>
                <p className={`text-base font-bold`}>Digital solutions 6</p>
                <p className={`text-base font-bold`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold`}>RECUSAR </p></Link>
            </div>
            
           
        </div>
    )
}

export default Cadastro_aprendiz
