import React from "react"
import Cliente from"./Himgs/cliente.png"
import Moneybag from"./Himgs/moneybag.png"
import Trading from"./Himgs/trading.png"

export default function Sessao3(){

    return(
        <section class="Sessao3Divs">
            <div><img src={Cliente}/></div>
            <div><img src={Moneybag}/></div>
            <div><img src={Trading}/></div>
        </section>
    )
}