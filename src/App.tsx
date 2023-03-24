import React, {useEffect, useState} from 'react';
import { JsxElement } from 'typescript';
import {nanoid} from "nanoid"
import {artPiece} from "./interface"

import './App.css';
import Card from './components/Card';

import artCollection from "./assets/art"


function App() {

// const [isStarted, setIsStarted] = useState<boolean>(true)

const levels = [4, 5, 6]
const chosenLevel = levels[2]
const numsOfCards = chosenLevel*2;
const artForTheGame = [...artCollection.slice(0, chosenLevel),...artCollection.slice(0, chosenLevel)]

const [openCards, setOpenCards] = useState<string[]>([])
const [cards, setCards] = useState(createCardElems())


console.log(openCards.length)

function move(id : string) {
  
  console.log("cliked: ", id)
  if (openCards.length <1) {
    console.log(openCards.length)
    setOpenCards(prevState => [...prevState, id])

  }

}


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

console.log(openCards)

function createCardElems() : JSX.Element[] {
  const randomNums = generateRandomNums(numsOfCards)

  const cardElems = randomNums.map( (x : number) => {
    let id = nanoid();
    return <Card key={id}
                 id={id} 
                 artPiece={artForTheGame[x]}
                 move={move}
                 openCards={openCards} />      
  })
  return cardElems
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
        {cards}
          
        </div>
      </div>
      <footer>
        Created by <a href='www.aleksandragalach.com'> Aleksandra Gałach </a> 2023
      </footer>
    </div>
  );
}

export default App;
