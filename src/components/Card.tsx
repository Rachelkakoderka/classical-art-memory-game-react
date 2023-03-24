import React, {useState} from 'react'
import {artPiece} from "../interface"

interface Props {
    id: string,
    artPiece: artPiece,
    move : Function,
    openCards: string[]
}

export default function Card(props: Props) {
    
    const { artPiece, id , move, openCards } = props 
    const [isHidden, setIsHidden] = useState<boolean>(openCards.includes(id))

    function handleClick(id : string){
        setIsHidden(prevState => !prevState)
    }

    const img = require(`../assets/${artPiece.fileName}`)
  

  return (
    <>
        <div id={id} className='card' onClick={(e) => {
            move(id)}}>
            
            <img 
                className= {isHidden ? "card_img covered" : 'card_img'} 
                src={img} />
            <div className=""></div>
        </div>  
    </>
    )
}
