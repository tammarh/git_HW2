import { useState } from "react"

const Counter6=()=>{

    const [Counter,setCounter]=useState(0)

    const untilSix=()=>{
        if(Counter===5)
        {   
            setCounter(0)
            alert("הגעת לסיפרה 6")
        }
        else
            setCounter(Counter+1)

    }
    return(
        <>
        <button onClick={untilSix}>UPDATECOUNTER</button>
        <div>{Counter}</div>
        
        </>
    )
}
export default Counter6