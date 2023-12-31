import React, { useState, useEffect } from 'react';
import './App.css'
export default function App(){

const [hora, setHora] = useState(0);
const[minuto, setMinuto] = useState(59);
const[segundo, setSegundo] = useState(50);

  useEffect(() => {
    const interval = setInterval(() =>{
      setSegundo(segundo +1);
      if(segundo == 59){
        setSegundo(0);
        setMinuto(minuto +1);
        if(minuto == 59){
          setMinuto(0);
          setHora(hora +1);
        }
      }  
    },1000);

    return () => clearInterval(interval);
  },);

  return (
    <div className='rel'>
      <h2>{hora}:{minuto}:{segundo}</h2>
    </div>
  );

}
