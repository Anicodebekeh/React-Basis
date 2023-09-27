import { useState } from "react";

export default function Toggler(){
    const [face, setFace]=useState(true)

    const changeFace = ()=>{
        setFace(!face)
    }

    return(
        <div>
            <p>{face? '😊': '😢'}</p>
            <button onClick={changeFace}>cick to change the face</button>
        </div>
    )
}