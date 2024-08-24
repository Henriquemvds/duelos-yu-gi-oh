import { useEffect, useState } from 'react'
import yamiYugi from '../images/personYugi.png'
import setoKaiba from '../images/personKaiba.webp'
import { Link } from "react-router-dom";



function ChoosePersons() {

    return (
        <main className="content">
            <section>
                <h1 className='yugioh-text'>Seja bem-vindo ao simulador de duelo Yu-Gi-Oh! </h1>
                <p className='yugioh-text'>Esse é um sistema simples de jogo baseado no deck principal de dois personagens
                    da franquia Yu-Gi-Oh!. Escolha um e desafie-se para tentar ganhar o duelo!
                </p>
                <h4 className='yugioh-text'>Escolha seu Deck!</h4>
                <Link style={{ textDecoration: 'none', color: '#000' }} to={`/deck-game-Yugi`} >
                    <img className='person' src={yamiYugi} />
                </Link>
                <Link style={{ textDecoration: 'none', color: '#000' }} to={`/deck-game-Kaiba`} >
                    <img className='person' src={setoKaiba} />
                </Link>
            </section>

        </main>

    )
}

export default ChoosePersons;