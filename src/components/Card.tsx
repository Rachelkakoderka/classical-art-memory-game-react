import React, {SyntheticEvent, useState} from 'react'
import {artPiece} from "../interface"

interface Props {
    id: string,
    artPiece: artPiece,
    isHidden : boolean,
    move : Function,
    openCard?: string,
    isHeld: boolean
}

export default function Card(props: Props) {
    
    const { artPiece, id , move, isHidden , isHeld } = props;

    const img = require(`../assets/${artPiece.fileName}`)
    //console.log("Card component widzi openCards:", openCards)

    function handleClick(e : SyntheticEvent) {
       e.preventDefault()
       if (!isHeld) {
        move(id)
       }   
    }

  return (
    <>
        <div id={id} className='card' onClick={handleClick}>
            
            <img 
                className= {isHeld ? "card_img" : (isHidden ? "card_img covered" : 'card_img')} 
                src={img} />
        </div>  
    </>
    )
}
