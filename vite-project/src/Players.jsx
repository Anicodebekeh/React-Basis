import { useState } from "react"

export default function Player(){
    const [score, setScore]= useState({p1score:0, p2score:0})
    
    const incrementScorep1 =()=>{
        setScore((oldscore)=>{
           return { ...oldscore, p1score: oldscore.p1score+1}
        })
    }

    const incrementScorep2 =()=>{
        setScore((oldscore)=>{
           return { ...oldscore, p2score: oldscore.p2score+1}
        })
    }

    return(
        <div>
            <p> player1: {score.p1score}</p>
            <p> player2: {score.p2score}</p>
            <button onClick={incrementScorep1}>p1score</button>
            <button onClick={incrementScorep2}>p1score</button>
            

        </div>
    )
}

// , p2score: score.p2score+=2