import uuid from 'react-uuid';
import { useState } from "react";

const choice = ['🍾','😊', '😢', '😊', '😿']
    const randomEmojis = ()=>{
        const idx =Math.floor(Math.random()*choice.length)
        return choice[idx]
    }
export default function EmojiCliker(){
    const [emoji, setEmoji]= useState([{id: uuid(), emoji: randomEmojis()}])

   const addEmoji = ()=>{
    setEmoji(oldEmojis => [...oldEmojis, {id:uuid(), emoji:randomEmojis()}])
   }

   const deleteEmoji = (id)=>{
    setEmoji(oldEmojis => {
       return  oldEmojis.filter(e => e.id !==id)
    })
    console.log(id)
   }

    // const newEmoji= setEmoji([...emoji, '😢'])

    return(
        <div>
            {emoji.map((e)=> (
             <span key={e.id} onClick={()=> deleteEmoji(e.id)}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>add emoji</button>
        </div>
    )
}