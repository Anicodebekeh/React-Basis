import { useState } from "react";

export default function score({numPlayer, target}){
    const [scores, setScore]=useState(new Array(numPlayer).fill(0))

    const addOne = (idx)=>{
        setScore((prevScore) =>{
            return prevScore.map((score, i)=>{
                if (i===idx) return score+1;
                return score
            }) 
        })
    }

    return (
        <div>
            <h1>Score Keeper</h1>
           <ul> {scores.map((score, idx)=>{
                return <li key={idx}>player {idx+1} : {score} <button onClick={()=> addOne(idx)}>+1</button></li>
            })}</ul>
        </div>
    )
}