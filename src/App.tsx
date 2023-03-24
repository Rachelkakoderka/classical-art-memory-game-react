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





function createCards() : CardObject[] {
   const cards : CardObject[] =  randomNums.map((x : number) => {
    return { 
     id : nanoid(),
     art : artForTheGame[x],
     isHeld : false,
     isHidden: true
    }}
    )
    return cards
}

//console.log(cards)

function move(id : string) {
  console.log("Masz tyle otwartych kart: ", openCards);

  if (openCard.length === 0) {
    setCards(
      prevCards => prevCards.map( card => card.id === id ? {...card, isHidden:false} : {...card} )
    )
    setOpenCard(id)
  } else if (openCards.length == 1) {
    setOpenCards(prevState => [...prevState, id])
  } else if (openCard.length == 2) {
    setOpenCard([])
    setCards(
      prevCards => prevCards.map( card => ({...card, isHidden:true}))
    )
  }

}

console.log(openCards)


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
          openCards={openCards} />              
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
