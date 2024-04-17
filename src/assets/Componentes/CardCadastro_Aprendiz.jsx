import React, { useState } from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import FiltroRoxo from './FiltroRoxo'
import axios from 'axios'


function CardCadastro_Aprendiz() { //CARD PARA CADASTRO DO APRENDIZ

    let lista_turma = ['Selecione', 'Digital Solutions 6', 'Digital Solutions 7', 'Digital Solutions 8', 'Digital Solutions 9', 'Digital Solutions 10']

    const [nome, setNome] = useState('')
    const [edv, setEdv] = useState('')
    const [email, setEmail] = useState('')
    const [turma, setTurma] = useState('')
    const [turmaId, setTurmaId] = useState(0)
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')

    const cadastrar = async (e) => {
        e.preventDefault()
        try {
            if (turma == '' || nome == '' || edv == '' || email == '' || senha == '' || confirmar == '') {
                alert('Preencha todos os campos!')
            }
            else {
                const response_turma = await axios.get(`http://127.0.0.1:8000/api/v1/turma/?turma:${turma}`)
                setTurmaId(response_turma.data[0].id)

                const response = await axios.post('http://127.0.0.1:8000/api/v1/usuario/', {
                    edv: edv,
                    email: email,
                    nome: nome,   
                    cargo: 'APRENDIZ',
                    idTurma: turmaId,
                    logado: false,
                    password: senha,
                    password_confirm: confirmar
                })
                alert(response.data.message)
                console.log(response)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={' bg-white relative mt-20 w-9/12 h-fit xl:h-5/6 2xl:w-7/12 3xl:w-6/12 pb-8'}>
            <img src={logoBosch} alt="" />
            <div className={'flex justify-center mt-7 mb-8'}>
                <Titulo h1='CADASTRO'></Titulo>
            </div>
            <div className={'flex justify-evenly items-center sm:flex-col lg:flex-row '}>
                <div className={'flex flex-col gap-5'}>
                    <InputRoxo label='Nome completo' value={nome} onChange={(e) => { setNome(e.target.value) }}> </InputRoxo>
                    <InputRoxo label='EDV' value={edv} onChange={(e) => { setEdv(e.target.value) }}> </InputRoxo>
                    <InputRoxo label='Email' value={email} onChange={(e) => { setEmail(e.target.value) }}> </InputRoxo>
                </div>
                <div className={'flex flex-col gap-5 '}>
                    <FiltroRoxo id="turma" label='Selecione a turma' value={turma} onChange={(e) => {
                        const turmaSelecionada = e.target.value
                        setTurma(turmaSelecionada)
                    }} optionList={lista_turma} ></FiltroRoxo>
                    <InputRoxo type='password' label='Senha ' value={senha} onChange={(e) => { setSenha(e.target.value) }}> </InputRoxo>
                    <InputRoxo type='password' label='Confirma senha' value={confirmar} onChange={(e) => { setConfirmar(e.target.value) }}> </InputRoxo>
                </div>

            </div>
            <div className={'flex justify-center mt-8'}>
                <Botaoroxo txt='CRIAR' onClick={cadastrar}></Botaoroxo>
            </div>

        </div>
    )
}

export default CardCadastro_Aprendiz


