import { useState } from "react";

export default function score({numPlayer, target}){
    const [scores, setScore]=useState(new Array(numPlayer).fill(0))
    const addOne = (idx)=>{
        setScore((prevScore) =>{
            return prevScore.map((score, i)=>{
                if (i===idx) {
                    return score+1;
                }
                return score
                
            }) 
        })
    }

    const reset=()=>{
        setScore(new Array(numPlayer).fill(0))
    }
  

    return (
        <div>
            <h1>Score Keeper</h1>
           <ul> {scores.map((score, idx)=>{
                return (
                    <div>
                        <li key={idx}>player {idx+1} : {score} <button onClick={()=> addOne(idx)}  disabled={score>=target}>+1</button></li>
                        { score>=target&& 'Winner'}
                    </div>
                )
            })}</ul>

            <button onClick={reset}>Reset</button>
        </div>
    )
}