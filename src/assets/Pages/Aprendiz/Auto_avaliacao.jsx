import React, { useState } from 'react'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'


function Auto_avaliacao() { //FUNÇÃO DA TELA DE AUTO AVALIAÇÃO DO ACESSO DE APRENDIZ

    let semestres = ['selecionar', '1° Semestre', '2° Semestre', '3° Semestre']

    const [semestre, setSemestre] = useState('')

    const selecao = (e) => {
        const novaopcaoselecionada = e.target.value;

        setSemestre(novaopcaoselecionada)
        console.log(semestre)
        if (semestre == '1° Semestre'){
            console.log('1 ° Semestre')
        }

    }


    // switch (semestre) {
    //     case "semestre1":
    //         console.log("Semestre 1")
    //         break;
    //     case "semestre2":
    //         console.log("Semestre 2")
    //         break;
    //     case "semestre3":
    //         console.log("Semestre 3")
    //         break;
    //     default:
    //         console.log("Nenhuma opção selecionada!");
    // }


    const acesso = ''

    switch (acesso) {
        case 'adm':
            return (
                <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
                    <h1 className={`text-2xl font-bold font-roboto `}>AVALIAÇÃO DA ÁREA</h1>
                    <p className={`text-base font-roboto`}>Bem-vindo(a) a sua avaliação da área, leia cada critério atentamente e reflita sobre a nota antes de submeter suas respostas. Abaixo você encontra a descrição de cada nota e de cada critério. Além disso, todos os campos obrigatórios devem ser preenchidos. </p>
                    <Filtro  label='Selecione o semestre' optionList={semestres} value={semestre} onChange={selecao} ></Filtro>
                    <div className={'flex justify-end'}>
                        <Botao txt='FINALIZAR' ></Botao>
                    </div>
                </div>
            )
        default:
            return (
                <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
                    <h1 className={`text-2xl font-bold font-roboto`}>AUTO AVALIAÇÃO</h1>
                    <p className={`text-base font-roboto`}>Bem-vindo(a) a sua auto avaliação, leia cada critério atentamente e reflita sobre a nota antes de submeter suas respostas. Abaixo você encontra a descrição de cada nota e de cada critério. Além disso, todos os campos obrigatórios devem ser preenchidos.</p>
                    <Filtro id="semestre" label='Selecione o semestre' optionList={semestres} value={semestre} onChange={selecao} ></Filtro>
                    <div className={'flex justify-end'}>
                        <Botao txt='FINALIZAR' ></Botao>
                    </div>
                </div>
            )
    }
}

export default Auto_avaliacao