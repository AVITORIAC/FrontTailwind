import { useState } from 'react'
import './App.css'
import Header from './assets/Componentes/Header'
import Botao from './assets/Componentes/Botao'
import Footer from './assets/Componentes/Footer'
import Home from './assets/Pages/Admin/Home'
import Card from './assets/Componentes/Card'



function App() {
  let instrutor = false
  let aprendiz = true
  let gestor = false
  let admin = false
  let home = false

  return (
    <>
    <Header instrutor={instrutor} aprendiz={aprendiz} gestor={gestor} admin={admin} home={home}/>
    
    <Home></Home>
     
      {/* <Card verde1 />
      <Card verde2 />
      <Card verde3 />
      <Card verde4 /> */}

    <Footer ciano={instrutor} verde={gestor} azul={admin}  azul_aprendiz={aprendiz} />
    </>
    
   
    )
}

export default App
