import { useState } from "react"


const CountDown=()=>{
    const [countDown,setcountDown]=useState(10)
    const Down=()=>{
        setcountDown(countDown-1)
    }
    
    return(
        <>
        <button onClick={Down}>CountDown</button>
        <div>{countDown}</div>
        </>
    )
}

export default CountDown