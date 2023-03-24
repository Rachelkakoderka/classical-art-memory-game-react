import React, {useEffect, useState} from 'react';
import { JsxElement } from 'typescript';
import {nanoid} from "nanoid"
import {artPiece, CardObject} from "./interface"

import './App.css';
import Card from './components/Card';

import artCollection from "./assets/art"


function App() {



const levels = [4, 5, 6]




//const [isStarted, setIsStarted] = useState<boolean>(true)
const [chosenLevel, setChosenLevel] = useState<number>(levels[2])
const artForTheGame = [...artCollection.slice(0, chosenLevel),...artCollection.slice(0, chosenLevel)];
const numsOfCards = chosenLevel*2;
const [openCard, setOpenCard] = useState<string>()
const [randomNums, setRandomNums] = useState<number[]>(generateRandomNums(numsOfCards))
const [cards, setCards] = useState(createCards())


function changeIsHidden(id : string, hidden: boolean ) {
  return setCards(
    prevCards => prevCards.map( card => card.id === id ? {...card, isHidden: hidden} : {...card} )
  )
}

function changeIsHeld(id : string, held: boolean ) {
  return setCards(
    prevCards => prevCards.map( card => card.id === id ? {...card, isHeld: held} : {...card} )
  )
}



function createCards() : CardObject[] {
   const cards : CardObject[] =  randomNums.map((x : number) => {
    return { 
     id : nanoid(),
     art : artForTheGame[x],
     isHeld : false,
     isHidden: true,
    }}
    )
    return cards
}

//console.log(cards)

function move(id : string) {
  console.log("Masz tyle otwartych kart: ", openCard);

  if (openCard) {
    
    console.log("sercond card opened")
    changeIsHidden(id, false);
    const firstCard = cards.find(x => x.id = openCard)
    const secondCard = cards.find(x => x.id = id);
    if (firstCard?.art.title === secondCard?.art.title) {
      changeIsHeld(id, true)
      changeIsHeld(openCard, true)
    } else {
      setTimeout(() => {
        changeIsHidden(id, true);
        changeIsHidden(openCard, true);
      },1000)
    }
  } else {
    changeIsHidden(id, false);
    setOpenCard(id)
  }
}
console.log(openCard)


function generateRandomNums(x : number) {   
  const randomNumsArr : number[] = [];
  while (randomNumsArr.length < x) { 
    //if you dont change (level[2]*2) accordingly it will cause infinite loop
      let num = Math.floor(Math.random()*x)
        if (!(randomNumsArr.includes(num))){
        randomNumsArr.push(num);
      }
  }
  return randomNumsArr;
}


function createCardElems() : JSX.Element[] {
  
  return cards.map( (card : CardObject) => {
    return <Card key={card.id}
          id={card.id} 
          artPiece={card.art}
          isHidden = {card.isHidden}
          move={move}
          openCard={openCard}
          isHeld={card.isHeld} />              
    })
}

//useEffect(() => setCards(createCardElems()), [isStarted])



//console.log(cards)

  return (
    <div className="app">
      <header className="app-header">
        <h2>ClassicalArt Memory Game</h2>
      </header>
      <div className='main'>
        <div className="level_container">

        </div>
        <div className="stats_container">

        </div>
        <div className="board_container">
        {createCardElems()}
          
        </div>
      </div>
      <footer>
        Created by <a href='www.aleksandragalach.com'> Aleksandra Gałach </a> 2023
      </footer>
    </div>
  );
}

export default App;
