const Citys =()=>{
    const citys=["Jerusalem","Petah tikua","hifa"]
    return(
<>
        <h1>  Citys </h1>{

        
        citys.map((item)=>{
            return(
                <h3>  {item} </h3>
            )
        })}
    
</>
)}
export default Citys;
