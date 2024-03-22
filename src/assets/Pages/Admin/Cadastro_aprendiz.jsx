import React from 'react'

function Cadastro_aprendiz() {
    return (
        <div className={`flex flex-col h-full gap-6 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>GERENCIAR APRENDIZES</h1>
            <h2 className={`text-lg font-bold`}>Novos cadastros</h2>
            <p className={`text-base font-semibold`}>Analise as informações e aceite ou recuse os novos aprendizes na plataforma através dos botões. </p>

            <div className={`w-full h-20 bg-barraedit flex gap-40 justify-center items-center `}>
                <p className={`text-base font-bold`}>Eduarda Rabelo Oliveira </p>
                <p className={`text-base font-bold`}>Digital solutions 6</p>
                <p className={`text-base font-bold`}>12345678 </p>
                <p className={`text-base font-bold`}>ACEITAR </p>
                <p className={`text-base font-bold`}>RECUSAR </p>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-40 justify-center items-center `}>
                <p className={`text-lg font-bold`}>Julia Roberta Veloso Guiraldeli</p>
                <p className={`text-lg font-bold`}>Digital solutions 6</p>
                <p className={`text-lg font-bold`}>12345678 </p>
                <p className={`text-lg font-bold`}>ACEITAR </p>
                <p className={`text-lg font-bold`}>RECUSAR </p>
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-40 justify-center items-center `}>
                <p className={`text-lg font-bold`}>Carlos Eduardo Faustino Barbosa </p>
                <p className={`text-lg font-bold`}>Digital solutions 6</p>
                <p className={`text-lg font-bold`}>12345678 </p>
                <p className={`text-lg font-bold`}>ACEITAR </p>
                <p className={`text-lg font-bold`}>RECUSAR </p>
            </div>
        </div>
    )
}

export default Cadastro_aprendiz
