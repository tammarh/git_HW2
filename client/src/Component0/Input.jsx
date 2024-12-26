import { useState,useEffect } from "react"

const Input=()=>{

    const [valInp,setvalInp]=useState('')
    const putInput=()=>{
        alert(valInp)
    }

    useEffect(() => {
        alert("ברוך הבא");
    }, [])
    
    return(
        <>
        <input type="text" onChange={(e)=>setvalInp(e.target.value)}/>
        <button onClick={putInput}>PUTINPUT</button>
        </>
    )
}

export default Input