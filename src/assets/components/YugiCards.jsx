import React, { useState, useEffect } from 'react';
import cardBack_Yugioh from '../images/cardBack_Yugioh.jpg'
import deckYugi1 from '../deck_YamiYugi/10000000.jpg'
import deckYugi2 from '../deck_YamiYugi/10000010.jpg'
import deckYugi3 from '../deck_YamiYugi/10000020.jpg'
import deckYugi4 from '../deck_YamiYugi/25652259.jpg'
import deckYugi5 from '../deck_YamiYugi/30208479.jpg'
import deckYugi6 from '../deck_YamiYugi/38033121.jpg'
import deckYugi7 from '../deck_YamiYugi/40640057.jpg'
import deckYugi8 from '../deck_YamiYugi/46986414.jpg'
import deckYugi9 from '../deck_YamiYugi/64788463.jpg'
import deckYugi10 from '../deck_YamiYugi/90876561.jpg'
import yamiYugi from '../images/personYugi.png'
import '../styles/gameDeck.css';

const cards = [
  {
    id: 8,
    Name: 'Mago Negro',
    Image: deckYugi8,
    Attack: 2500,
    Def: 2100,
    Type: 'Normal Monster',
    Typing: 'Spellcaster',
    Attribute: 'Dark',
    Description: "O mago definitivo em termos de ataque e defesa"
  }

];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [deck, setDeck] = useState(shuffleArray([...cards]));
  const [animation, setAnimation] = useState('scale(1)');
  const [width, setWidth] = useState('100px');
  const [height, setHeight] = useState('150px');
  const [isFolderVisible, setFolderVisible] = useState(false);

  const handleImageClick = () => {
    setFolderVisible(true);
    setAnimation('scale(1.5)');
  };

  const handleCloseClick = () => {
    setFolderVisible(false);
    setAnimation('scale(1)')
  };

  const handleChangePosition = () => {
    setFolderVisible(false);
    setAnimation('rotate(-90deg)')
    setHeight('150px')
  };

 
  return (
    <div className="game-container">
      <h1 className='yugioh-text'>É hora do Duelo!</h1>
      <div className='align-row'>
        <div className="field">
          <div className='align-row'>
            <img className='card' src={cardBack_Yugioh}></img>
            <div className="zone" id="opponent-spells-traps">
              <div className='grid'>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
              </div>
            </div>

          </div>
          <div className="zone" id="opponent-monsters">
            <div className='grid'>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
            </div>

          </div>
          <div className="zone" id="player-monsters">
            <div className='grid'>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
              <div className='space-card' ></div>
            </div>

          </div>
          <div className='align-row'>
            <div className="zone" id="player-spells-traps">
              <div className='grid'>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                <div className='space-card' ></div>
                {
                  cards.map((i) => (
                    <>
                      <img onClick={handleImageClick} className='card' style={{ width: `${width}` , height: `${height}`,  transition: 'transform 1s ease-in-out', transform: `${animation}` }} title={`${i.Name}: ${i.Description}`} src={deckYugi8}></img>
                    </>
                  )
                  )
                }
                {isFolderVisible && (
                  <div className="folder">
                    <div className="folder-header">
                      <button className="close-btn" onClick={handleCloseClick}>&times;</button>
                    </div>
                    <div className="folder-description">
                      <button onClick={handleChangePosition}>Mudar de posição de batalha</button>
                      <button>Usar para ataque</button>
                      <button>Ver atributos</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <img className='card' src={cardBack_Yugioh}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;