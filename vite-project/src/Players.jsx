import { useState } from "react"

export default function Player(){
    const [score, setScore]= useState({p1score:0, p2score:0})
    
    const incrementScore =()=>{
        const newScore={...score, p1score:score.p1score+=1}
        setScore(newScore)
    }

    return(
        <div>
            <p> player1: {score.p1score}</p>
            <p> player2: {score.p2score}</p>
            <button onClick={incrementScore}>p1score</button>
            <button>p2score</button>

        </div>
    )
}

// , p2score: score.p2score+=2