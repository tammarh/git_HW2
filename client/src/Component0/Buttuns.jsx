import { useState } from "react"

const Buttuns=()=>{
    const [str,setStr]=useState('');
    const func=(text)=>{
        setStr(text);
    }
    return(
        <>
        <button onClick={()=>func('Buttun1')}>Buttun1</button>
        <button onClick={()=>func('Buttun2')}>Buttun2</button>
        <p>{str}</p>
        </>
    )
}
export default Buttuns