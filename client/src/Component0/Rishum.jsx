import { useState } from "react";

const Rishum=()=>{

    const [name,setName]=useState(' ')
    const [nirsham,setnirsham]=useState(false)

    const func=()=>{
        setnirsham(true)
    }
    return(
        <>
        {!nirsham ?
        (<div>
        <input onChange={((e)=>setName(e.target.value))}></input> 
        <button onClick={func}>שמור</button></div>) :
        <div> שלום {name} נרשמת בהצלחה למערכת </div>}


        </>
    )
}

export default Rishum