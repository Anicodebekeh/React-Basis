import { useState } from "react";

export default function EmojiCliker(){
    const [emoji, setEmoji]= useState(['😊'])

   const addEmoji = ()=>{
    setEmoji(oldEmojis => [...oldEmojis,'😢'])
   }

    // const newEmoji= setEmoji([...emoji, '😢'])

    return(
        <div>
            {emoji.map((e)=> (
             <span>{e}</span>
            ))}
            <button onClick={addEmoji}>add emoji</button>
        </div>
    )
}