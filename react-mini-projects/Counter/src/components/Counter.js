 import React,{useState} from 'react'
 
 function Counter() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

   return (
     <>
       <h1>{count}</h1>
       <button onClick = {() => setCount(count + amount)} >Arttır</button>
     
       <hr></hr>
       <h1>Arttırma: {count}</h1>
       <button onClick={() => setAmount(1)} >+1</button>
       <button onClick={() => setAmount(3)}>+3</button>
       <button onClick={() => setAmount(10)}>+10</button>
       
     </>
   )
 }
 
 export default Counter
 
