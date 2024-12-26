import { useState } from "react";

const Calculat=()=>{

    const [shekel,setshekel]=useState('')
    const [dolar,setdolar]=useState(null)

    function todolar() {
        setdolar(shekel * 3.5)
    }
    return(
        <>
        <h3>הכנס שקלים</h3>
        <input onChange={(e)=>setshekel(e.target.value)}></input><br></br>
        <button onClick={todolar}>המרה לדולר</button>
        {dolar!==null &&(
        <p>{shekel} = {dolar}$</p>)}
        </>
    )
}

export default Calculat