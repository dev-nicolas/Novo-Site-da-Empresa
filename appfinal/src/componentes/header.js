import React from "react";
import Logo from "./imgs/Logo-Branco.png"

export default function header(){
    return(
        <section class="header">
        <div class="logomarca">
            <img src={Logo}/>
        </div>
        <div class="caixamenu">
            <div class="Btts">
                <button>Entre em contato</button>
                <button>Abra a sua conta</button>
            </div>
            <div>
                <nav>
                    <ul class="menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Soluções</a></li>
                        <li><a href="">Nossos conteúdos</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </section>
    )
}