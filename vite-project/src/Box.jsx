import { useState } from 'react'
import './Box.css'

const colorIdx = (arr)=>{
    const idx =Math.floor(Math.random()*arr.length);
    return arr[idx]      
}

export default function Box({color}){
    const [newColor, setNewColor]= useState(colorIdx(color))

    const changeColorBox= ()=>{
        const randColor = colorIdx(color)
        setNewColor(randColor)
    }

    return(
        <div onClick={changeColorBox} style={{backgroundColor:newColor}} className="box">

            
        </div>
    )
}