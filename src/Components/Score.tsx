import { useState } from "react";
interface ScoreProps {
score:number
highscore:number
}

const Score: React.FC<ScoreProps> = (props) => {
    
   return(
    <>
    <p className="label-score">
    💯 Score: <span className="score">{props.score}</span>
  </p>
  <p className="label-highscore">
    🥇 Highscore: <span className="highscore">{props.highscore}</span>
  </p>
   </>
   )
}

export default Score