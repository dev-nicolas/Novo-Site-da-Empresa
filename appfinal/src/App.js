import React from "react"
import "./App.css"
import Header from "./componentes/Header.js"
import Capa from  "./Home/CapaHome"
import Sessao2 from "./Home/Sessao2"
import Sessao3 from "./Home/Sessao3"

export default function App(){

  return(
    <>
    <Header/>
    <Capa/>
    <Sessao2/>
    <Sessao3/>
    </>
  )
}