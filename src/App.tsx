import React, { useState } from "react";
import NumberBox from "./Components/NumberBox";
import Button from "./Components/Button";
import HidenScore from "./Components/HidenScore";
import Message from "./Components/Message";
import Score from "./Components/Score";
import { useEffect } from "react";
const randomNum =  Math.floor(Math.random() * (21 - 1) + 1);



const App: React.FC = ()=> {
   const [num,setNum] = useState<number | string>('');
   const [visibleNum, setVisibleNum] = useState<string | number>('?')
   const [score, setScore] = useState<number>(20);
   const [highscore,setHighscore] = useState<number>(0)
   const [msg, setMsg]  = useState<string>('iniziamo...');
   const [disabled,setDisabled] = useState<boolean>(false)
   const [randomNumber,setRandomNumber] = useState<number>(randomNum)
  
   useEffect(()=>{
     if(score<=0){
       setMsg('hai perso')
     }
   },[score])


   const showMessage = (): void => {
    if (+score <= 0){
      setMsg('hai perso')
    }
     else if(num > randomNumber) {
       setMsg("scegli un numero più piccolo")
     }else if(num < randomNumber){
      setMsg("scegli un numero piu grande")
     }else if(num == randomNumber){
       setMsg("bravo hai vinto")
       document.body.style.backgroundColor = 'green';
     }
   }
 
   console.log(msg)
   
  const onAgainClick = (): void => {
    setDisabled(false);
    setRandomNumber(Math.floor(Math.random() * (21 - 1) + 1))
    setNum("");
    setVisibleNum('?')
    setScore(20)
    setMsg('iniziamo...');
    document.body.style.backgroundColor = 'black';
    
    
  }
  console.log("rnd" +randomNumber)

   //console.log("sssss"+visibleNum)
   
   //console.log('siamo in app' + num)


  return (
    <div>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <Button  click={onAgainClick} text={"again"} style={"btn again"} />
        <HidenScore num={visibleNum}  />
      </header>
      <main>
        <NumberBox  showMessage={showMessage}  setNum={setNum} setVisibleNum={setVisibleNum} num={num} setScore={setScore} 
        setHighscore={setHighscore}  score={score} highscore={highscore} setMsg={setMsg} randomNum={randomNumber} disabled={disabled} setDisabled={setDisabled}/>
        <section className="right">
          <Message msg={msg} />
           <Score score={score} highscore={highscore}/>
        </section>
      </main>
    </div>
  );
}

export default App;
