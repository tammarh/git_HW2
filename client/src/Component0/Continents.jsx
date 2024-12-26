import React, { useState, useEffect } from "react";

const Continents = () => {
  const continentsData = [
    {
      name: "Africa",
      details: "Africa is the second-largest continent by land area and population. It has 54 countries.",
    },
    {
      name: "Asia",
      details: "Asia is the largest continent, both by area and population. It is home to over 4.6 billion people.",
    },
    {
      name: "Europe",
      details: "Europe is  contains 44 countries.",
    },
    {
      name: "America",
      details: "America includes countries such as the USA, Canada, and Mexico.",
    },
    {
      name: "Australia",
      details: "Australia is both a country and a continent. It is the smallest continent.",
    },
    {
      name: "Antarctica",
      details: "Antarctica is the coldest.",
    }
    ]
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [continentDetails, setContinentDetails] = useState("");
    useEffect(()=>{
        if(selectedContinent!==null)
            setContinentDetails(selectedContinent.details)
    },[selectedContinent])
    return(
        <>
        <h2> Choose a continent </h2>
        {continentsData.map((contient)=>
        <div onClick={()=>setSelectedContinent(contient)}> {contient.name}</div>
        )}
        {selectedContinent && (<p>{continentDetails}</p>)}
        </>
    )
}

export default Continents