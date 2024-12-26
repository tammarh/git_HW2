import { useState,useEffect } from "react";

const Counters=()=>{

    const [counter1,setcounter1]=useState(5)
    const counterer =()=>{
        setcounter1(counter1+1)
    }
    return(
        <>
        <button onClick={counterer}>כפתור מונים</button>
        <p>{counter1}</p>
        <p>{counter1*2}</p>
        </>
    )

}

export default Counters