import uuid from 'react-uuid';
import { useState } from "react";


export default function EmojiCliker(){
    const [emoji, setEmoji]= useState([{id: uuid(), emoji:'😊'}])

   const addEmoji = ()=>{
    setEmoji(oldEmojis => [...oldEmojis, {id:uuid(), emoji:'😢'}])
   }

    // const newEmoji= setEmoji([...emoji, '😢'])

    return(
        <div>
            {emoji.map((e)=> (
             <span key={e.id}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>add emoji</button>
        </div>
    )
}