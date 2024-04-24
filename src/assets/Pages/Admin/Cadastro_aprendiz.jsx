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
        <div className={`flex flex-col h-fit lg:h-full gap-6 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold font-roboto`}>GERENCIAR APRENDIZES</h1>
            <h2 className={`text-lg font-bold font-roboto`}>Novos cadastros</h2>
            <p className={`text-lg font-semibold font-roboto `}>Analise as informações e aceite ou recuse os novos aprendizes na plataforma através dos botões. </p>

           
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-normal items-center sm:gap-4 sm:pr-2 sm:pl-2 md:gap-10 lg:gap-16 xl:gap-20`}>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Eduarda Rabelo Oliveira</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Digital solutions 6</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-start items-center sm:gap-4 sm:pr-2 sm:pl-2 md:gap-10 lg:gap-16 xl:gap-20`}>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Carlos Eduardo Faustino Barbosa </p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Digital solutions 6</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center sm:gap-4 sm:pr-2 sm:pl-2 md:gap-10 lg:gap-16 xl:gap-20`}>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Eduarda Rabelo Oliveira</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Digital solutions 6</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center sm:gap-4 sm:pr-2 sm:pl-2 md:gap-10 lg:gap-16 xl:gap-20`}>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Carlos Eduardo Faustino Barbosa</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Digital solutions 6</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>RECUSAR </p></Link>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center sm:gap-4 sm:pr-2 sm:pl-2 md:gap-10 lg:gap-16 xl:gap-20`}>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Eduarda Rabelo Oliveira</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>Digital solutions 6</p>
                <p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>12345678 </p>
               <Link onClick={aceitar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>ACEITAR </p></Link>
               <Link onClick={recusar}><p className={`text-base font-bold font-roboto sm:text-sm lg:text-base xl:text-xl`}>RECUSAR </p></Link>
            </div>
          
            {/* <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
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
            </div> */}
            
           
        </div>
    )
}

export default Cadastro_aprendiz

