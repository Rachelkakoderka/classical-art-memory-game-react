import React from 'react';
import { JsxElement } from 'typescript';

import './App.css';
import Card from './components/Card';

import artDetails from "./assets/art"




function App() {

const level = [8, 10, 12]

function generateRandomNums() {
    
  const randomNumsArr : number[] = [];
    while (randomNumsArr.length<12) {
      let num = Math.floor(Math.random()*4)
        if (!(randomNumsArr.includes(num))){
        randomNumsArr.push(num);
      }
  }
  return randomNumsArr;
}
console.log(generateRandomNums())

function createCardElems() : JSX.Element[] {
  let elems = []

  const randomNums = generateRandomNums()

  for (let i=0; i < level[2]; i++) {
      elems.push(<Card key={i} />)
  }
  return elems
}


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
