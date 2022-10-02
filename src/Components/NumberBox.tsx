import Button from "./Button";
import { useState } from "react";

interface NBProps {
  showMessage:() => void
  setNum:(n:number|string) => void
  setVisibleNum:(n:number | string) => void
  num:number | string
  setScore:(n:number) => void
  setHighscore:(n:number) => void
  score: number
  highscore:number
  setMsg:(s:string) => void 
  randomNum: number
  disabled:boolean
  setDisabled:(b:boolean) => void
}




const NumberBox: React.FC<NBProps> = (props) => {
 
  
  
   

   const check = (): void =>{
    
    
    if(props.num == props.randomNum ){
      
      props.setVisibleNum(props.num)
      props.setHighscore(props.score)
      props.setDisabled(true);
    }else{
      props.setScore(props.score-1);
      if(props.score === 1) {
        
        props.setDisabled(true)
        
      }
    }

    
    
   }
   
  

  const onChangeInput = (e:any) => {
  
   props.setNum(e.target.value)
   
  }
  
  const onCheckClick = (): void => {
   if(props.num > 0 && props.num <21){
     check();
   props.showMessage();
   }
   else{
     props.setMsg('numero non valido')
   }
  }

  
  

  return(
    <section  className="left">
    <input value={props.num}  onChange={onChangeInput} type="number" className="guess" />
    <Button  dsb={props.disabled} click={onCheckClick} text={"Check!"} style={'btn'}/>
  </section> 
  )
}

export default NumberBox;