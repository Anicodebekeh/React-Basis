import { useState } from 'react'
import './Box.css'
export default function Box({color}){
    const [newColor, setNewColor]= useState('green')

    const changeColorBox= ()=>{
        const idx =Math.floor(Math.random()*color.length);
        const randColor= color[idx]
        setNewColor(randColor)
    }

    return(
        <div onClick={changeColorBox} style={{backgroundColor:newColor}} className="box">

            
        </div>
    )
}