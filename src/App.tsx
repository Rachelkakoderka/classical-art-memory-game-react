import React from 'react';
import { JsxElement } from 'typescript';

import './App.css';
import Card from './components/Card';




function App() {

//const [img, setimg] = useState()
const level = [6, 10, 12]

function createCardElems() : JSX.Element[] {
  let elems = []
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
