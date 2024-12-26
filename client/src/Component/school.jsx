import { useState , useEffect } from "react";

const School = ()=>{

    useEffect(() => {
        alert("ברוך הבא");
    }, [])

    const [students,setStudents]=useState(["tamar ,","yeal ,","dvora ,","gili"])
    const [kurses,setkurses]=useState()
    const [teachers,setteachers]=useState()
    const [rishum,setrishum]=useState(false)
    const [name,setname]=useState('')
    const [kurs,setkurs]=useState('')
    const [OK,setOK]=useState(false)


    const showTeachers=()=>{
        setteachers(["aaa ,","bbbb ,","cccc ,","ddd"])
    }

    const showKursess=()=>{
        setkurses(["Math ,","Java ,","C# ,","React"])
    }
    const toOK=()=>{
        setOK(true)
        setrishum(false)
    }
    return(
        <>
        <p>students :{students} </p>
        <button onClick={showTeachers}>show Teachers</button>
        <p>{teachers}</p>
        <button onClick={showKursess}>show Kursess</button>
        <p>{kurses}</p>
        <button onClick={()=>setrishum(true)}>Rishum</button>
        {rishum &&( <div>
            name : <input type="text" onChange={(e)=>(setname(e.target.value))}/>  <br></br>
            kurs : <input type="text" onChange={(e)=>(setkurs(e.target.value))}/> </div>)}
         <button onClick={toOK}>OK</button>
         {OK && (<div>welcome {name} to {kurs}</div>)}
        
        </>
    )
}

export default School