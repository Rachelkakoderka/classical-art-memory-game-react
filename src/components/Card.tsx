import React, {useState} from 'react'
import four from "../assets/four.jpg" 
import Klimt1 from "../assets/GustavKlimt-Love.jpg"

export default function Card() {

    const [isHidden, setIsHidden] = useState<boolean>(false)

  return (
    <>
        <div className='card'>
            
            <img className= {isHidden ? "card_img covered" : 'card_img'} src={Klimt1} />
            <div className=""></div>
        </div>  
    </>
    )
}
