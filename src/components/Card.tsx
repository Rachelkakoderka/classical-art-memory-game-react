import React, {useState} from 'react'
import {artPiece} from "../interface"

interface Props {
    id: string,
    artPiece: artPiece,
    isHidden : boolean,
    move : Function,
    openCards: string[]
}

export default function Card(props: Props) {
    
    const { artPiece, id , move, openCards, isHidden } = props;

    const img = require(`../assets/${artPiece.fileName}`)
    //console.log("Card component widzi openCards:", openCards)

  return (
    <>
        <div id={id} className='card' onClick={(e) => { e.preventDefault()
            move(id)}}>
            
            <img 
                className= {isHidden ? "card_img covered" : 'card_img'} 
                src={img} />
        </div>  
    </>
    )
}
