import { useState } from 'react'
import './App.css'
import Header from './assets/Componentes/Header'
import Botao from './assets/Componentes/Botao'
import Footer from './assets/Componentes/Footer'
import Home from './assets/Pages/Admin/Home'
import HomeIns from './assets/Pages/Instrutor/HomeIns'
import Card from './assets/Componentes/Card'
import Cadastro_turma from './assets/Pages/Admin/Cadastro_turma'
import Input from './assets/Componentes/Input'
import Editar_turma from './assets/Pages/Admin/Editar_turma'
import Cadastro_aprendiz from './assets/Pages/Admin/Cadastro_aprendiz'
import Critérios from './assets/Pages/Admin/Critérios'
import Editar_criterio from './assets/Pages/Admin/Editar_criterio'
import Avaliacao from './assets/Pages/Instrutor/Avaliacao'
import Feedback from './assets/Pages/Instrutor/Feedback'
import Avaliacao_feedback from './assets/Pages/Instrutor/Avaliacao_feedback'
import Observacoes from './assets/Pages/Instrutor/Observacoes'
import Auto_avaliacao from './assets/Pages/Aprendiz/Auto_avaliacao'
import Home_aprendiz from './assets/Pages/Aprendiz/Home_aprendiz'
import Cadastro from './assets/Pages/Cadastro/Cadastro'

function App() {
  let instrutor = false
  let aprendiz = false
  let gestor = false
  let admin = false
  let home = false

  
  return (
    <div className={'h-full gap-4 flex flex-col justify-between'}>
      {/* <Header instrutor={instrutor} aprendiz={aprendiz} gestor={gestor} admin={admin} home={home} /> */}

      {/* <HomeIns></HomeIns> */}
      {/* <Home></Home> */}
      {/* <Cadastro_turma></Cadastro_turma> */}
      {/* <Editar_turma/> */}
      {/* <Cadastro_aprendiz/> */}
      {/* <Critérios/> */}
      {/* <Avaliacao/> */}
      {/* <Feedback/> */}
      {/* <Avaliacao_feedback/> */}
      {/* <Observacoes/>  */}
      {/* <Auto_avaliacao/> */}
      {/* <Home_aprendiz/> */}
      <Cadastro/>
      {/* <Editar_criterio/> */}
      {/* <Input></Input> */}
      {/* <Card verde1 />
      <Card verde2 />
      <Card verde3 />
      <Card verde4 /> */}

      {/* <Footer ciano={instrutor} verde={gestor} azul={admin} azul_aprendiz={aprendiz} /> */}
    </div>


  )
}

export default App
